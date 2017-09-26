import {
  RECEIVE_DATASET
} from '../actions/dataset_actions';

const CurrentChartReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DATASET:
      return action.dataset;
    default:
      return state;
  }
};

export default CurrentChartReducer;
