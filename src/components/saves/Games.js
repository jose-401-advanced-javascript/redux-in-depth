import React from 'react';
import PropTypes from 'prop-types';
import Game from './Game';

const Games = ({ saves }) => {
  const games = saves.map(game => {
    return (
      <li key={game.name}>
        <Game {...game} />
      </li>
    );
  });

  return (
    <ul>
      {games}
    </ul>
  );
};

Games.propTypes = {
  saves: PropTypes.arrayOf(PropTypes.shape({
    coffees: PropTypes.string.isRequired,
    snacks: PropTypes.string.isRequired,
    naps: PropTypes.string.isRequired,
    studies: PropTypes.string.isRequired,
    face: PropTypes.string.isRequired
  })).isRequired
};

export default Games;
