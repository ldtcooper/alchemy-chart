import {
  RECEIVE_CHARTS
} from '../actions/chart_actions';

const ChartsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHARTS:
      return action.charts;
    default:
      return state;
  }
};

export default ChartsReducer;
