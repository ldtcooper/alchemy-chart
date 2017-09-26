import {
  RECEIVE_CHARTS, REMOVE_FRONTEND_CHART
} from '../actions/chart_actions';

const ChartsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHARTS:
      return action.charts;
    case REMOVE_FRONTEND_CHART:
      let newState = [...state];
      newState = newState.filter( (chart) => (chart.id !== action.id));
      return newState;
    default:
      return state;
  }
};

export default ChartsReducer;
