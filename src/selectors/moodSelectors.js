export const getCoffee = state => state.coffees;
export const getSnack = state => state.snacks;
export const getNap = state => state.naps;
export const getStudies = state => state.studies;

export const actions = [
  { name: 'DRINK_COFFEE', text: 'Drink Coffee', stateName: 'coffees', selector(state) {return getCoffee(state);}  },
  { name: 'EAT_SNACK', text: 'Snack', stateName: 'snacks', selector(state) {return getSnack(state);} },
  { name: 'TAKE_NAP', text: 'Nap', stateName: 'naps', selector(state) {return getNap(state);} },
  { name: 'STUDY', text: 'Study', stateName: 'studies', selector(state) {return getStudies(state);} },
];

export const isTired = state => state.coffees < 1 && state.naps < 1;
export const isHyper = state => state.coffees > 3;
export const isEducated = state => state.studies > 2;
export const isHungry = state => state.snacks < 1;

export const getFace = state => {
  if(isTired(state) && isHungry(state)) return '🤬';
  if(isHyper(state) && isHungry(state)) return '🤮';
  if(isTired(state)) return '😴';
  if(isHyper(state)) return '🙀';
  if(isEducated(state)) return '🤯';
  if(isHungry(state)) return '😡';

  return '😀';
};
