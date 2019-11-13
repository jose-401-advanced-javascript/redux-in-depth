import React from 'react';
import { connect } from 'react-redux';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import Games from '../components/saves/Games';
import { addSelection, resetGame } from '../actions/moodActions';
import { saveGame } from '../actions/savesActions';
import { actions, getFace } from '../selectors/moodSelectors';
import { getSaves } from '../selectors/savesSelectors';
import styles from './Moods.css';

// eslint-disable-next-line react/prop-types
const Moods = ({ actions, emoji, handleSelection, resetGame, saveGame, saves }) => (
  <section className={styles.Moods}>
    <Controls actions={actions} handleSelection={handleSelection} />
    <Face emoji={emoji} />
    <button onClick={resetGame}>Reset</button>
    <button onClick={saveGame}>Save</button>
    <Games saves={saves} />
  </section>
);

const mapStateToProps = state => ({
  actions: actions.map(action => ({ ...action, count: action.selector(state) })),
  emoji: getFace(state),
  saves: getSaves(state)
});



const mapDispatchToProps = dispatch => ({
  handleSelection(name) {
    dispatch(addSelection(name));
  },
  resetGame() {
    dispatch(resetGame());
  },
  saveGame() {
    dispatch(saveGame());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Moods);
