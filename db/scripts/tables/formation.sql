/**
 *  formation equivalanet to formations found in https://fantasy.premierleague.com/drf/bootstrap-static:game_settings.game.formations
 *
 */
CREATE TABLE formation(
  id	SMALLINT UNIQUE PRIMARY KEY,
  name	VARCHAR(7) NOT NULL,
  formation	SMALLINT[5][5] NOT NULL,
  valid	BOOLEAN NOT NULL
);

INSERT INTO formation
VALUES
  (1, '1-2-5-3', '{{0, 0, 1, 0, 0}, {0, 2, 0, 3, 0}, {4, 5, 6, 7, 8}, {9, 0, 10, 0, 11}, {12, 0, 13, 14, 15}}', FALSE),
  (2, '1-3-4-3', '{{0, 0, 1, 0, 0}, {0, 2, 3, 4, 0}, {5, 6, 0, 7, 8}, {0, 9, 10, 11, 0}, {12, 0, 13, 14, 15}}', TRUE),
  (3, '1-3-5-2', '{{0, 0, 1, 0, 0}, {0, 2, 3, 4, 0}, {5, 6, 7, 8, 9}, {0, 10, 0, 11, 0}, {12, 0, 13, 14, 15}}', TRUE),
  (4, '1-4-3-3', '{{0, 0, 1, 0, 0}, {2, 3, 0, 4, 5}, {0, 6, 7, 8, 0}, {9, 0, 10, 0, 11}, {12, 0, 13, 14, 15}}', TRUE),
  (5, '1-4-4-2', '{{0, 0, 1, 0, 0}, {2, 3, 0, 4, 5}, {6, 7, 0, 8, 9}, {0, 10, 0, 11, 0}, {12, 0, 13, 14, 15}}', TRUE),
  (6, '1-4-5-1', '{{0, 0, 1, 0, 0}, {2, 3, 0, 4, 5}, {6, 7, 8, 9, 10}, {0, 0, 11, 0, 0}, {12, 0, 13, 14, 15}}', TRUE),
  (7, '1-5-2-3', '{{0, 0, 1, 0, 0}, {2, 3, 4, 5, 6}, {0, 7, 0, 8, 0}, {9, 0, 10, 0, 11}, {12, 0, 13, 14, 15}}', TRUE),
  (8, '1-5-3-2', '{{0, 0, 1, 0, 0}, {2, 3, 4, 5, 6}, {7, 0, 8, 0, 9}, {0, 10, 0, 11, 0}, {12, 0, 13, 14, 15}}', TRUE),
  (9, '1-5-4-1', '{{0, 0, 1, 0, 0}, {2, 3, 4, 5, 6}, {7, 8, 0, 9, 10}, {0, 0, 11, 0, 0}, {12, 0, 13, 14, 15}}', TRUE);

  