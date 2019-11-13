import { combineReducers } from 'redux';
import mood from './moodReducer';
import saves from './savesReducer';

export default combineReducers({
  mood,
  saves
});
