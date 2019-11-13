export const SAVE_GAME = 'SAVE_GAME';
export const saveGame = (game) => ({
  type: SAVE_GAME,
  payload: game
});
