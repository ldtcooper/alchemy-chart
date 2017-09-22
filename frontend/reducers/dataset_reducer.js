import {
  RECEIVE_DATASETS
} from '../actions/dataset_actions';

const DatasetsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DATASETS:
      return action.datasets;
    default:
      return state;
  }
};

export default DatasetsReducer;
