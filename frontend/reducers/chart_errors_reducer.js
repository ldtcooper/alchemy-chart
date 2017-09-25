import {
  RECEIVE_CHART_ERRORS, RECEIVE_CHART, RECEIVE_CHARTS
} from '../actions/chart_actions';

const ChartErrorReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHART_ERRORS:
      return action.errors;
    case RECEIVE_CHARTS:
      return [];
    case RECEIVE_CHART:
      return [];
    default:
      return state;
  }
};

export default ChartErrorReducer;
