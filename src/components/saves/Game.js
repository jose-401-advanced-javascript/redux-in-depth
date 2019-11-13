import React from 'react';
import PropTypes from 'prop-types';

const Game = ({ coffees, snacks, naps, studies, face }) => {
  return (
    <div>
      <p>{coffees}</p>
      <p>{snacks}</p>
      <p>{naps}</p>
      <p>{studies}</p>
      <p>{face}</p>
    </div>
  );
};

Game.propTypes = {
  coffees: PropTypes.string.isRequired,
  snacks: PropTypes.string.isRequired,
  naps: PropTypes.string.isRequired,
  studies: PropTypes.string.isRequired,
  face: PropTypes.string.isRequired
};

export default Game;
