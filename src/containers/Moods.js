import React from 'react';
import { connect } from 'react-redux';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { addSelection } from '../actions/moodActions';
import { actions, getFace } from '../selectors/moodSelectors';

// eslint-disable-next-line react/prop-types
const Moods = ({ actions, emoji, handleSelection }) => (
  <>
    <Controls actions={actions} handleSelection={handleSelection} />
    <Face emoji={emoji} />
  </>
);

const mapStateToProps = state => ({
  actions: actions.map(action => ({ ...action, count: action.selector(state) })),
  emoji: getFace(state)
});

const mapDispatchToProps = dispatch => ({
  handleSelection(name) {
    dispatch(addSelection(name));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Moods);
