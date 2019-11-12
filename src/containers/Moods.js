import React from 'react';
import { connect } from 'react-redux';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { addSelection, resetGame } from '../actions/moodActions';
import { actions, getFace } from '../selectors/moodSelectors';

// eslint-disable-next-line react/prop-types
const Moods = ({ actions, emoji, handleSelection, resetGame }) => (
  <>
    <Controls actions={actions} handleSelection={handleSelection} />
    <Face emoji={emoji} />
    <button onClick={resetGame}>Reset</button>
  </>
);

const mapStateToProps = state => ({
  actions: actions.map(action => ({ ...action, count: action.selector(state) })),
  emoji: getFace(state)
});

const mapDispatchToProps = dispatch => ({
  handleSelection(name) {
    dispatch(addSelection(name));
  },
  resetGame() {
    dispatch(resetGame());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Moods);
