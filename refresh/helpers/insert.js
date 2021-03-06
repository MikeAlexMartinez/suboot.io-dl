'use strict';

const async = require('async');
const _cliProgress = require('cli-progress');

const {compareItems, processUpdate, cleanNewItem} = require('./updateTracking');

module.exports = {
  batchInsert,
  insertItem,
};

/*
  ########################################
  #                                      #
  #   Insert Clean Items into DB Table   #
  #                                      #
  ########################################
*/

/**
 * Takes data and inserts into db using given model, transforming data
 * if necessary.
 * @param {array} data - an array of data items to insert using the Model
 * @param {model} Model - A Sequelize Model
 * @param {function} fn - a function to transform the array items to conform to
 *   Model definition.
 * @return {promise}
 */
function batchInsert(data, Model, fn) {
  console.log(
    `Starting processing items for table ${Model.getTableName()}`
  );

  return new Promise((res) => {
    // prepare progress bar options
    const progressOtions = {
      stopOnComplete: true,
      format: '[{bar}] {percentage}% | {value}/{total}',
    };

    const progressBar = new _cliProgress.Bar(
      progressOtions,
      _cliProgress.Presets.shades_classic
    );

    progressBar.start(data.length, 0);

    // capture and categorise the results of the data.
    const updates = [];
    const errors = [];
    const noChange = [];
    const news = [];

    // this defines what to do to each item in the queue
    const q = async.queue(function manageQ(item, cb) {
      // transform if transform function provided
      const cleanItem = fn ? fn(item): item;

      insertItem(cleanItem, Model)
        .then(({updated, processed, itemId, isNew}) => {
          if (updated === 1 ) {
            // has item been updated
            updates.push(itemId);
          } else if (isNew === 1) {
            // Item is new
            news.push(itemId);
          } else if (processed === 1) {
            // has item been processed but not updated
            noChange.push(itemId);
          } else {
            // item generated an error
            errors.push(itemId);
          }
          cb(null, item);
        })
        .catch((err) => {
          console.log(err);

          errors.push(item.id);
          cb(err, item.id);
        });
    }, 10);

    // This runs after all items are processed
    q.drain = function queueFinished() {
      progressBar.stop();
      console.log(
        `Finished processing items for table ${Model.getTableName()}`
      );

      res({
        updates,
        errors,
        noChange,
        news,
      });
    };

    // This runs after each item has been processed
    q.push(data, function processItem(err, item) {
      if (err) {
        // console.log(item);
        console.log(`## Error processing ${item.id}!`);
      } else {
        // console.log(`Successfully processed ${item.id}!`);
      }

      // add progress to the progress bar
      progressBar.update(progressBar.value + 1);
    });
  });
}

/**
 * Takes an item to insert and a Model to use to control the insert
 * @param {object} item
 * @param {model} Model
 * @return {promise}
 */
function insertItem(item, Model) {
  return new Promise((res) => {
    let updated = 0;
    let isNew = 0;
    let processed = 1;

    let cleanItem = cleanNewItem(item);

    // check for existence of player, update, or create
    Model.findOrCreate({where: {id: cleanItem.id}, defaults: cleanItem})
      .then(([foundItem, status]) => {
        // item exists
        if (!status) {
          /* console.log(`item ${foundItem.id} was NOT created!`);
          console.log('Previous: ');
          console.log(foundItem.dataValues);
          console.log('New: ');
          console.log(cleanItem); */

          const {isChanged,
            updatedItem} = compareItems(foundItem.dataValues, cleanItem);

          // if isChanged update new item
          if (isChanged) {
            Model.update(updatedItem, {
                where: {id: foundItem.id},
              })
              .then(([count, rows]) => {
                updated++;
                // console.log(`item ${foundItem.id} WAS updated!`);
                // once updated store update in update header and detail
                return processUpdate(foundItem,
                  updatedItem,
                  Model.getTableName()
                );
              })
              .then(() => {
                res({updated, processed, isNew, itemId: cleanItem.id});
              })
              .catch((err) => {
                console.error(err);
                res({updated, processed: 0, isNew, itemId: cleanItem.id});
              });
          } else {
            // console.log(`item ${foundItem.id} was NOT updated!`);
            // return
            res({updated, processed, isNew, itemId: cleanItem.id});
          }
        } else {
          // else record that player was updated.
          // console.log(`item ${foundItem.id} WAS created!`);
          isNew++;
          res({updated, processed, isNew, itemId: cleanItem.id});
        }
      })
      .catch((err) => {
        // handle error but continue with rest of queue
        console.error(err);
        res({updated: 0, processed: 0, isNew: 0, item: cleanItem.id});
      });
  });
}
