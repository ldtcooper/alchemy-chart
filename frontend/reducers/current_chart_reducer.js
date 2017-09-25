import {
  RECEIVE_CHART
} from '../actions/chart_actions';

const CurrentChartReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHART:
      return action.chart;
    default:
      return state;
  }
};

export default CurrentChartReducer;
