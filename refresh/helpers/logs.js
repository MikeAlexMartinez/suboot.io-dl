'use strict';

const {capitalise} = require('./general');

module.exports = {
  printLogs,
};

/**
 * prints all summary log items to screen after process has complete
 * @param {object} data
 * @return {promise}
 */
function printLogs(data) {
  const logs = data.logs;
  return new Promise((res, rej) => {
    if (logs.length === 0) {
      rej( new Error('No logs were created'));
    } else {
      logs.forEach((v) => {
        console.log(`=========== ${capitalise(v.name)} Summary ===========`);

        v.results.forEach((r) => {
          console.log(r);
        });

        console.log('');
      });

      res(data);
    }
  });
}
