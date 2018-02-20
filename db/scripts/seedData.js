/*jshint camelcase: false, maxlen: false */

'use strict';

module.exports = {
  playerType: [
    {
      id: 1,
      plural_name: 'Goalkeepers',
      plural_name_short: 'GKP',
      singular_name: 'Goalkeeper',
      singular_name_short: 'GKP'
    },{
      id: 2,
      plural_name: 'Defenders',
      plural_name_short: 'DEF',
      singular_name: 'Defender',
      singular_name_short: 'DEF'
    },{
      id: 3,
      plural_name: 'Midfielders',
      plural_name_short: 'MID',
      singular_name: 'Midfielder',
      singular_name_short: 'MID'
    },{
      id: 4,
      plural_name: 'Forwards',
      plural_name_short: 'FWD',
      singular_name: 'Forward',
      singular_name_short: 'FWD'
    }
  ],
  formation: [
    {
      id: 1,
      name: '1-2-5-3',
      formation: [[0, 0, 1, 0, 0], 
                  [0, 2, 0, 3, 0], 
                  [4, 5, 6, 7, 8], 
                  [9, 0, 10, 0, 11], 
                  [12, 0, 13, 14, 15]],
      valid: false,
    },
    {
      id: 2,
      name: '1-3-4-3',
      formation: [[0, 0, 1, 0, 0], 
                  [0, 2, 3, 4, 0], 
                  [5, 6, 0, 7, 8], 
                  [0, 9, 10, 11, 0], 
                  [12, 0, 13, 14, 15]],
      valid: true,
    },
    {
      id: 3,
      name: '1-3-5-2',
      formation: [[0, 0, 1, 0, 0], 
                  [0, 2, 3, 4, 0], 
                  [5, 6, 7, 8, 9], 
                  [0, 10, 0, 11, 0], 
                  [12, 0, 13, 14, 15]],
      valid: true,
    },
    {
      id: 4,
      name: '1-4-3-3',
      formation: [[0, 0, 1, 0, 0], 
                  [2, 3, 0, 4, 5], 
                  [0, 6, 7, 8, 0], 
                  [9, 0, 10, 0, 11], 
                  [12, 0, 13, 14, 15]],
      valid: true,
    },
    {
      id: 5,
      name: '1-4-4-2',
      formation: [[0, 0, 1, 0, 0], 
                  [2, 3, 0, 4, 5], 
                  [6, 7, 0, 8, 9], 
                  [0, 10, 0, 11, 0], 
                  [12, 0, 13, 14, 15]],
      valid: true,
    },
    {
      id: 6,
      name: '1-4-5-1',
      formation: [[0, 0, 1, 0, 0], 
                  [2, 3, 0, 4, 5], 
                  [6, 7, 8, 9, 10], 
                  [0, 0, 11, 0, 0], 
                  [12, 0, 13, 14, 15]],
      valid: true,
    },
    {
      id: 7,
      name: '1-5-2-3',
      formation: [[0, 0, 1, 0, 0], 
                  [2, 3, 4, 5, 6], 
                  [0, 7, 0, 8, 0], 
                  [9, 0, 10, 0, 11], 
                  [12, 0, 13, 14, 15]],
      valid: true,
    },
    {
      id: 8,
      name: '1-5-3-2',
      formation: [[0, 0, 1, 0, 0], 
                  [2, 3, 4, 5, 6], 
                  [7, 0, 8, 0, 9], 
                  [0, 10, 0, 11, 0], 
                  [12, 0, 13, 14, 15]],
      valid: true,
    },
    {
      id: 9,
      name: '1-5-4-1',
      formation: [[0, 0, 1, 0, 0], 
                  [2, 3, 4, 5, 6], 
                  [7, 8, 0, 9, 10], 
                  [0, 0, 11, 0, 0], 
                  [12, 0, 13, 14, 15]],
      valid: true,
    }
  ],
  bonusPointsSystem: [
    { 
      id: 1, 
      scoring_item: 'bps_assists', 
      display_name: 'assists', 
      value: 9, 
      description: 'points scored per item',
      specific: false,
      position: 'ALL' 
    },
    { 
      id: 2,
      scoring_item: 'bps_attempted_passes_limit',
      display_name: 'attempted_passes_limit', 
      value: 30, 
      description: 'Need to test this',  
      specific: false, 
      position: 'ALL' 
    },
    { 
      id: 3, 
      scoring_item: 'bps_big_chances_created', 
      display_name: 'big_chances_created', 
      value: 3, 
      description: 'points scored per item',  
      specific: false, 
      position: 'ALL' 
    },
    { 
      id: 4, 
      scoring_item: 'bps_big_chances_missed', 
      display_name: 'big_chances_missed', 
      value: -3, 
      description: 'points scored per item', 
      specific: false, 
      position: 'ALL' 
    },
    { 
      id: 5, 
      scoring_item: 'bps_cbi_limit', 
      display_name: 'cbi_limit', 
      value: 2, 
      description: 'number of clearances blocks ints required for a point',  
      specific: false, 
      position: 'ALL' 
    },
    { 
      id: 6, 
      scoring_item: 'bps_clearances_blocks_interceptions', 
      display_name: 'clearances_blocks_interceptions', 
      value: 1, 
      description: 'points scored per item specifed by cbi_limit',  
      specific: false, 
      position: 'ALL' 
    },
    { 
      id: 7, 
      scoring_item: 'bps_dribbles', 
      display_name: 'dribbles', 
      value: 1, 
      description: 'points scored per item',  
      specific: false, 
      position: 'ALL' 
    },
    { 
      id: 8, 
      scoring_item: 'bps_errors_leading_to_goal', 
      display_name: 'errors_leading_to_goal', 
      value: -3, 
      description: 'points scored per item',  
      specific: false, 
      position: 'ALL' 
    },
    { 
      id: 9, 
      scoring_item: 'bps_errors_leading_to_goal_attempt', 
      display_name: 'errors_leading_to_goal_attempt', 
      value: -1, 
      description: 'points scored per item',  
      specific: false, 
      position: 'ALL' 
    },
    { 
      id: 10, 
      scoring_item: 'bps_fouls', 
      display_name: 'fouls', 
      value: -1, 
      description: 'points scored per item',  
      specific: false, 
      position: 'ALL' 
    },
    { 
      id: 11, 
      scoring_item: 'bps_key_passes', 
      display_name: 'key_passes', 
      value: 1, 
      description: 'points scored per item',  
      specific: false, 
      position: 'ALL' 
    },
    { 
      id: 12, 
      scoring_item: 'bps_long_play', 
      display_name: 'long_play', 
      value: 6, 
      description: 'points scored if played minimum of long_play_limit minutes',  
      specific: false, 
      position: 'ALL' 
    },
    { 
      id: 13, 
      scoring_item: 'bps_long_play_limit', 
      display_name: 'long_play_limit', 
      value: 60, 
      description: 'points scored per item',  
      specific: false, 
      position: 'ALL' 
    },
    { 
      id: 14, 
      scoring_item: 'bps_offside', 
      display_name: 'offside', 
      value: -1, 
      description: 'points scored per item',  
      specific: false, 
      position: 'ALL' 
    },
    { 
      id: 15, 
      scoring_item: 'bps_open_play_crosses', 
      display_name: 'open_play_crosses', 
      value: 1, 
      description: 'points scored per item',  
      specific: false, 
      position: 'ALL' 
    },
    { 
      id: 16, 
      scoring_item: 'bps_own_goals', 
      display_name: 'own_goals', 
      value: -6, 
      description: 'points scored per item',  
      specific: false, 
      position: 'ALL' 
    },
    { 
      id: 17, 
      scoring_item: 'bps_pass_percentage_70', 
      display_name: 'pass_percentage_70', 
      value: 2, 
      description: 'points scored per item',  
      specific: false, 
      position: 'ALL' 
    },
    { 
      id: 18, 
      scoring_item: 'bps_pass_percentage_80', 
      display_name: 'pass_percentage_80', 
      value: 4, 
      description: 'points scored per item',
      specific: false, 
      position: 'ALL' 
    },
    { 
      id: 19, 
      scoring_item: 'bps_pass_percentage_90', 
      display_name: 'pass_percentage_90', 
      value: 6, 
      description: 'points scored per item',  
      specific: false, 
      position: 'ALL' 
    },
    { 
      id: 20, 
      scoring_item: 'bps_penalties_conceded', 
      display_name: 'penalties_conceded', 
      value: -3, 
      description: 'points scored per item',  
      specific: false, 
      position: 'ALL' 
    },
    { 
      id: 21, 
      scoring_item: 'bps_penalties_missed', 
      display_name: 'penalties_missed', 
      value: -6, 
      description: 'points scored per item',  
      specific: false, 
      position: 'ALL' 
    },
    { 
      id: 22, 
      scoring_item: 'bps_penalties_saved', 
      display_name: 'penalties_saved', 
      value: 15, 
      description: 'points scored per item',  
      specific: false, 
      position: 'ALL' 
    },
    { 
      id: 23, 
      scoring_item: 'bps_recoveries', 
      display_name: 'recoveries', 
      value: 1, 
      description: 'points scored each time recoveries limit is achieved',
      specific: false, 
      position: 'ALL' 
    },
    { 
      id: 24, 
      scoring_item: 'bps_recoveries_limit', 
      display_name: 'recoveries_limit', 
      value: 3, 
      description: 'recoveries required to score a point',  
      specific: false, 
      position: 'ALL' 
    },
    { 
      id: 25, 
      scoring_item: 'bps_red_cards', 
      display_name: 'red_cards', 
      value: -9, 
      description: 'points scored per item',  
      specific: false, 
      position: 'ALL' 
    },
    { 
      id: 26, 
      scoring_item: 'bps_saves', 
      display_name: 'saves', 
      value: 2, 
      description: 'points scored per item',  
      specific: false, 
      position: 'ALL' 
    },
    { 
      id: 27, 
      scoring_item: 'bps_short_play', 
      display_name: 'short_play', 
      value: 3, 
      description: 'points scored if less than long_play_limit achieved',  
      specific: false, 
      position: 'ALL' 
    },
    { 
      id: 28, 
      scoring_item: 'bps_tackled', 
      display_name: 'tackled', 
      value: -1, 
      description: 'points scored per item',  
      specific: false, 
      position: 'ALL' 
    },
    { 
      id: 29, 
      scoring_item: 'bps_tackles', 
      display_name: 'tackles', 
      value: 2, 
      description: 'points scored per item', 
      specific: false, 
      position: 'ALL' 
    },
    { 
      id: 30, 
      scoring_item: 'bps_target_missed', 
      display_name: 'target_missed', 
      value: -1, 
      description: 'points scored per item', 
      specific: false, 
      position: 'ALL' 
    },
    { 
      id: 31, 
      scoring_item: 'bps_winning_goals', 
      display_name: 'winning_goals', 
      value: 3, 
      description: 'points scored per item',  
      specific: false, 
      position: 'ALL' },
    { 
      id: 32, 
      scoring_item: 'bps_yellow_cards', 
      display_name: 'yellow_cards', 
      value: -3, 
      description: 'points scored per item',  
      specific: false, 
      position: 'ALL' 
    },
    { 
      id: 33, 
      scoring_item: 'bps_clean_sheets', 
      display_name: 'clean_sheets', 
      value: 12, 
      description: 'points scored per item for specified position', 
      specific: true, 
      position: 'GKP' 
    },
    { 
      id: 34, 
      scoring_item: 'bps_goals_scored', 
      display_name: 'goals_scored', 
      value: 12, 
      description: 'points scored per item for specified position', 
      specific: true,
      position: 'GKP' 
    },
    { 
      id: 35, 
      scoring_item: 'bps_clean_sheets', 
      display_name: 'clean_sheets', 
      value: 12, 
      description: 'points scored per item for specified position', 
      specific: true, 
      position: 'DEF' 
    },
    { 
      id: 36, 
      scoring_item: 'bps_goals_scored', 
      display_name: 'goals_scored', 
      value: 12, 
      description: 'points scored per item for specified position', 
      specific: true, 
      position: 'DEF' 
    },
    { 
      id: 37, 
      scoring_item: 'bps_clean_sheets', 
      display_name: 'clean_sheets',  
      value: 0, 
      description: 'points scored per item for specified position', 
      specific: true, 
      position: 'MID' 
    },
    { 
      id: 38, 
      scoring_item: 'bps_goals_scored', 
      display_name: 'goals_scored', 
      value: 18, 
      description: 'points scored per item for specified position', 
      specific: true, 
      position: 'MID' 
    },
    { 
      id: 39, 
      scoring_item: 'bps_clean_sheets', 
      display_name: 'clean_sheets',  
      value: 0, 
      description: 'points scored per item for specified position', 
      specific: true, 
      position: 'FWD' 
    },
    { 
      id: 40, 
      scoring_item: 'bps_goals_scored', 
      display_name: 'goals_scored', 
      value: 24, 
      description: 'points scored per item for specified position', 
      specific: true, 
      position: 'FWD' 
    }, 
  ],
  phase: [
    { 
      id: 1, 
      name: 'Overall', 
      start_event: 1, 
      stop_event: 38
    },
    { 
      id: 2, 
      name: 'August', 
      start_event: 1, 
      stop_event: 3
    },
    { 
      id: 3, 
      name: 'September', 
      start_event: 4, 
      stop_event: 7
    },
    { 
      id: 4, 
      name: 'October', 
      start_event: 8,
      stop_event: 10
    },
    { 
      id: 5, 
      name: 'November', 
      start_event: 11, 
      stop_event: 14
    },
    { 
      id: 6, 
      name: 'December', 
      start_event: 15, 
      stop_event: 21
    },
    { 
      id: 7, 
      name: 'January', 
      start_event: 22, 
      stop_event: 25
    },
    { 
      id: 8, 
      name: 'February', 
      start_event: 26, 
      stop_event: 28
    },
    { 
      id: 9, 
      name: 'March', 
      start_event: 29, 
      stop_event: 32
    },
    { 
      id: 10, 
      name: 'April', 
      start_event: 33, 
      stop_event: 36
    },
    { 
      id: 11, 
      name: 'May', 
      start_event: 37, 
      stop_event: 38
    }
  ],
  statItem: [
    {id:1,stat_item_name: 'assists',stat_item_is_general: false,stat_item_type: 'attack'},
    {id:2,stat_item_name: 'attempted_passes',stat_item_is_general: true,stat_item_type: 'normal'},
    {id:3,stat_item_name: 'big_chances_created',stat_item_is_general: false,stat_item_type: 'attack'},
    {id:4,stat_item_name: 'big_chances_missed',stat_item_is_general: false,stat_item_type: 'attack'},
    {id:5,stat_item_name: 'bonus',stat_item_is_general: true,stat_item_type: 'normal'},
    {id:6,stat_item_name: 'bps',stat_item_is_general: true,stat_item_type: 'normal'},
    {id:7,stat_item_name: 'clean_sheets',stat_item_is_general: false,stat_item_type: 'defend'},
    {id:8,stat_item_name: 'clearances_blocks_interceptions',stat_item_is_general: false,stat_item_type: 'defend'},
    {id:9,stat_item_name: 'completed_passes',stat_item_is_general: true,stat_item_type: 'normal'},
    {id:10,stat_item_name: 'creativity',stat_item_is_general: true,stat_item_type: 'normal'},
    {id:11,stat_item_name: 'dribbles',stat_item_is_general: false,stat_item_type: 'attack'},
    {id:12,stat_item_name: 'ea_index',stat_item_is_general: true,stat_item_type: 'normal'},
    {id:13,stat_item_name: 'errors_leading_to_goal',stat_item_is_general: false,stat_item_type: 'defend'},
    {id:14,stat_item_name: 'errors_leading_to_goal_attempt',stat_item_is_general: false,stat_item_type: 'defend'},
    {id:15,stat_item_name: 'fouls',stat_item_is_general: true,stat_item_type: 'normal'},
    {id:16,stat_item_name: 'goals_conceded',stat_item_is_general: false,stat_item_type: 'defend'},
    {id:17,stat_item_name: 'goals_scored',stat_item_is_general: false,stat_item_type: 'attack'},
    {id:18,stat_item_name: 'ict_index',stat_item_is_general: true,stat_item_type: 'normal'},
    {id:19,stat_item_name: 'influence',stat_item_is_general: true,stat_item_type: 'normal'},
    {id:20,stat_item_name: 'key_passes',stat_item_is_general: true,stat_item_type: 'normal'},
    {id:21,stat_item_name: 'loaned_in',stat_item_is_general: true,stat_item_type: 'normal'},
    {id:22,stat_item_name: 'loaned_out',stat_item_is_general: true,stat_item_type: 'normal'},
    {id:23,stat_item_name: 'minutes',stat_item_is_general: true,stat_item_type: 'normal'},
    {id:24,stat_item_name: 'offside',stat_item_is_general: false,stat_item_type: 'attack'},
    {id:25,stat_item_name: 'open_play_crosses',stat_item_is_general: false,stat_item_type: 'attack'},
    {id:26,stat_item_name: 'own_goals',stat_item_is_general: false,stat_item_type: 'defend'},
    {id:27,stat_item_name: 'penalties_conceded',stat_item_is_general: true,stat_item_type: 'defend'},
    {id:28,stat_item_name: 'penalties_missed',stat_item_is_general: true,stat_item_type: 'attack'},
    {id:29,stat_item_name: 'penalties_saved',stat_item_is_general: true,stat_item_type: 'keeper'},
    {id:30,stat_item_name: 'recoveries',stat_item_is_general: false,stat_item_type: 'defend'},
    {id:31,stat_item_name: 'red_cards',stat_item_is_general: true,stat_item_type: 'normal'},
    {id:32,stat_item_name: 'round',stat_item_is_general: true,stat_item_type: 'normal'},
    {id:33,stat_item_name: 'saves',stat_item_is_general: false,stat_item_type: 'keeper'},
    {id:34,stat_item_name: 'selected',stat_item_is_general: true,stat_item_type: 'normal'},
    {id:35,stat_item_name: 'tackled',stat_item_is_general: false,stat_item_type: 'defend'},
    {id:36,stat_item_name: 'tackles',stat_item_is_general: false,stat_item_type: 'defend'},
    {id:37,stat_item_name: 'target_missed',stat_item_is_general: false,stat_item_type: 'attack'},
    {id:38,stat_item_name: 'threat',stat_item_is_general: true,stat_item_type: 'normal'},
    {id:39,stat_item_name: 'total_points',stat_item_is_general: true,stat_item_type: 'normal'},
    {id:40,stat_item_name: 'transfers_balance',stat_item_is_general: true,stat_item_type: 'normal'},
    {id:41,stat_item_name: 'transfers_in',stat_item_is_general: true,stat_item_type: 'normal'},
    {id:42,stat_item_name: 'transfers_out',stat_item_is_general: true,stat_item_type: 'normal'},
    {id:43,stat_item_name: 'value',stat_item_is_general: true,stat_item_type: 'normal'},
    {id:44,stat_item_name: 'winning_goals',stat_item_is_general: false,stat_item_type: 'attack'},
    {id:45,stat_item_name: 'yellow_cards',stat_item_is_general: true,stat_item_type: 'normal'},
    {id:46,stat_item_name: 'opponent_team',stat_item_is_general: true,stat_item_type: 'normal'},
    {id:47,stat_item_name: 'team_a_score',stat_item_is_general: true,stat_item_type: 'normal'},
    {id:48,stat_item_name: 'team_h_score',stat_item_is_general: true,stat_item_type: 'normal'}    
  ],
  scoringItem: [
    {id:1,scoring_item_name: 'assists',scoring_item_is_general: false,scoring_item_type: 'attack'},
    {id:2,scoring_item_name: 'bonus',scoring_item_is_general: true,scoring_item_type: 'normal'},
    {id:3,scoring_item_name: 'bps',scoring_item_is_general: true,scoring_item_type: 'normal'},
    {id:4,scoring_item_name: 'clean_sheets',scoring_item_is_general: false,scoring_item_type: 'defend'},
    {id:5,scoring_item_name: 'creativity',scoring_item_is_general: false,scoring_item_type: 'attack'},
    {id:6,scoring_item_name: 'goals_conceded',scoring_item_is_general: false,scoring_item_type: 'defend'},
    {id:7,scoring_item_name: 'goals_scored',scoring_item_is_general: false,scoring_item_type: 'attack'},
    {id:8,scoring_item_name: 'ict_index',scoring_item_is_general: false,scoring_item_type: 'attack'},
    {id:9,scoring_item_name: 'in_dreamteam',scoring_item_is_general: true,scoring_item_type: 'normal'},
    {id:10,scoring_item_name: 'influence',scoring_item_is_general: true,scoring_item_type: 'normal'},
    {id:11,scoring_item_name: 'minutes',scoring_item_is_general: true,scoring_item_type: 'normal'},
    {id:12,scoring_item_name: 'own_goals',scoring_item_is_general: false,scoring_item_type: 'defend'},
    {id:13,scoring_item_name: 'penalties_missed',scoring_item_is_general: false,scoring_item_type: 'attack'},
    {id:14,scoring_item_name: 'penalties_saved',scoring_item_is_general: false,scoring_item_type: 'keeper'},
    {id:15,scoring_item_name: 'red_cards',scoring_item_is_general: true,scoring_item_type: 'normal'},
    {id:16,scoring_item_name: 'saves',scoring_item_is_general: false,scoring_item_type: 'keeper'},
    {id:17,scoring_item_name: 'threat',scoring_item_is_general: false,scoring_item_type: 'attack'},
    {id:18,scoring_item_name: 'total_points',scoring_item_is_general: true,scoring_item_type: 'normal'},
    {id:19,scoring_item_name: 'yellow_cards',scoring_item_is_general: true,scoring_item_type: 'normal'},    
  ],
  scoringSystem: [
    {id:1 ,scoring_item: 'scoring_assists', display_name: 'assists', value:3, description: 'for each assist the player scores 3 points', specific: false, position: 'ALL'},
    {id:2 ,scoring_item: 'scoring_bonus', display_name: 'bonus', value:1, description: 'for each bonus point the player scores 1 point', specific: false, position: 'ALL'},
    {id:3 ,scoring_item: 'scoring_bps', display_name: 'bps', value:0, description: 'this is not used', specific: false, position: 'ALL'},
    {id:4 ,scoring_item: 'scoring_concede_limit', display_name: 'concede_limit', value:2, description: 'For each 2 goals conceded the player will lose specified number of points', specific: false, position: 'ALL'},
    {id:5 ,scoring_item: 'scoring_creativity', display_name: 'creativity', value:0, description: 'this is not used', specific: false, position: 'ALL'},
    {id:6 ,scoring_item: 'scoring_ea_index', display_name: 'ea_index', value:0, description: 'this is not used', specific: false, position: 'ALL'},
    {id:7 ,scoring_item: 'scoring_ict_index', display_name: 'ict_index', value:0, description: 'this is not used', specific: false, position: 'ALL'},
    {id:8 ,scoring_item: 'scoring_influence', display_name: 'influence', value:0, description: 'this is not used', specific: false, position: 'ALL'},
    {id:9 ,scoring_item: 'scoring_long_play', display_name: 'long_play', value:2, description: 'if the player reached the long_play_limit the player scores 2 points', specific: false, position: 'ALL'},
    {id:10 ,scoring_item: 'scoring_long_play_limit', display_name: 'long_play_limit', value:60, description: 'defines minutes required to be awarded the long play limit points', specific: false, position: 'ALL'},
    {id:11 ,scoring_item: 'scoring_own_goals', display_name: 'own_goals', value:-2, description: 'the player loses 2 points if they score an own goal', specific: false, position: 'ALL'},
    {id:12 ,scoring_item: 'scoring_penalties_missed', display_name: 'penalties_missed', value:-2, description: 'the player loses 2 points if they miss a penalty', specific: false, position: 'ALL'},
    {id:13 ,scoring_item: 'scoring_penalties_saved', display_name: 'penalties_saved', value:5, description: 'the GKP gains 5 points if they save a penalty', specific: false, position: 'ALL'},
    {id:14 ,scoring_item: 'scoring_red_cards', display_name: 'red_cards', value:-3, description: 'if the player receives a red card they lose 3 points', specific: false, position: 'ALL'},
    {id:15 ,scoring_item: 'scoring_saves', display_name: 'saves', value:1, description: 'for each set of (saves_limit) saves the gkp scores 1 point', specific: false, position: 'GKP'},
    {id:16 ,scoring_item: 'scoring_saves_limit', display_name: 'saves_limit', value:3, description: 'the number of saves to be made to score an additional point', specific: false, position: 'ALL'},
    {id:17 ,scoring_item: 'scoring_short_play', display_name: 'short_play', value:1, description: 'points scored by a player who plays but doesn’t meet the long_play_limit requirement', specific: false, position: 'ALL'},
    {id:18 ,scoring_item: 'scoring_threat', display_name: 'threat', value:0, description: 'this is not used', specific: false, position: 'ALL'},
    {id:19 ,scoring_item: 'scoring_yellow_cards', display_name: 'yellow_cards', value:-1, description: 'if the player receives a yellow card they lose 3 points', specific: false, position: 'ALL'},
    {id:20 ,scoring_item: 'scoring_clean_sheets', display_name: 'clean_sheets', value:4, description: 'this many points is gained if the player keeps a clean sheet', specific: true, position: 'GKP'},
    {id:21 ,scoring_item: 'scoring_goals_conceded', display_name: 'goals_conceded', value:-1, description: 'this many points is lost each time the concede_limit is reached', specific: true, position: 'GKP'},
    {id:22 ,scoring_item: 'scoring_goals_scored', display_name: 'goals_scored', value:6, description: 'this many points is gained if the player scores a goal', specific: true, position: 'GKP'},
    {id:23 ,scoring_item: 'scoring_clean_sheets', display_name: 'clean_sheets', value:4, description: 'this many points is gained if the player keeps a clean sheet', specific: true, position: 'DEF'},
    {id:24 ,scoring_item: 'scoring_goals_conceded', display_name: 'goals_conceded', value:-1, description: 'this many points is lost each time the concede_limit is reached', specific: true, position: 'DEF'},
    {id:25 ,scoring_item: 'scoring_goals_scored', display_name: 'goals_scored', value:6, description: 'this many points is gained if the player scores a goal', specific: true, position: 'DEF'},
    {id:26 ,scoring_item: 'scoring_clean_sheets', display_name: 'clean_sheets', value:1, description: 'this many points is gained if the player keeps a clean sheet', specific: true, position: 'MID'},
    {id:27 ,scoring_item: 'scoring_goals_conceded', display_name: 'goals_conceded', value:0, description: 'this many points is lost each time the concede_limit is reached', specific: true, position: 'MID'},
    {id:28 ,scoring_item: 'scoring_goals_scored', display_name: 'goals_scored', value:5, description: 'this many points is gained if the player scores a goal', specific: true, position: 'MID'},
    {id:29 ,scoring_item: 'scoring_clean_sheets', display_name: 'clean_sheets', value:0, description: 'this many points is gained if the player keeps a clean sheet', specific: true, position: 'FWD'},
    {id:30 ,scoring_item: 'scoring_goals_conceded', display_name: 'goals_conceded', value:0, description: 'this many points is lost each time the concede_limit is reached', specific: true, position: 'FWD'},
    {id:31 ,scoring_item: 'scoring_goals_scored', display_name: 'goals_scored', value:4, description: 'this many points is gained if the player scores a goal', specific: true, position: 'FWD'},    
  ],
};