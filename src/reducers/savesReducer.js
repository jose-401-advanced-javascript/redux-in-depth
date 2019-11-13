import { SAVE_GAME } from '../actions/savesActions';

export default function reducer(state = [], action) {
  switch(action.type) {
    case SAVE_GAME:
      return [...state, action.payload];
    default:
      return state;
  }
}
