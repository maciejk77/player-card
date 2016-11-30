import { combineReducers } from 'redux';
import PlayerReducer from './reducer_player';
import PlayersReducer from './reducer_players';

const rootReducer = combineReducers({
  players: PlayersReducer,
  player: PlayerReducer
});

export default rootReducer;
