import * as resourcesAction from 'redux/actions/resourcesActions';

export const increase = () => {
  return {
    type: 'INCREASE'
  }
};

export const decrease = () => {
  return {
    type: 'DECREASE'
  }
};

export const heal = () => {
  return {
    type: 'HEAL'
  }
};

export const sicken = () => {
  return {
    type: 'SICKEN'
  }
};

export const feed = () => {
  return (dispatch, getState) => {
    const {resources, population} = getState();
    // consume a unit of food
    dispatch(resourcesAction.consume('food'));

    // heal / sicken population depending on stored food
    if(resources.food > 0) {
      dispatch(heal());
    } else {
      dispatch(sicken());
    }

    // increase / decrese popukation depending on health
    if(population.health > 0) {
      dispatch(increase());
    } else {
      dispatch(decrease());
    }
  }
};