import {
  RECEIVE_DATASETS, RECEIVE_DATA_ERRORS
} from '../actions/dataset_actions';

const DatasetErrorReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DATA_ERRORS:
      return action.errors;
    case RECEIVE_DATASETS:
      return [];
    default:
      return state;
  }
};

export default DatasetErrorReducer;
