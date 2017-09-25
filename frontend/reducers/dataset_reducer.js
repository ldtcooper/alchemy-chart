import {
  RECEIVE_DATASETS, REMOVE_FRONTEND_DATASET
} from '../actions/dataset_actions';

const DatasetsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DATASETS:
      return action.datasets;
    case REMOVE_FRONTEND_DATASET:
      let newState = [...state];
      newState = newState.filter( (dataset) => (dataset.id !== action.id));
      return newState;
    default:
      return state;
  }
};

export default DatasetsReducer;
