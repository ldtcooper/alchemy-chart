import * as DataApiUtils from '../util/dataset_api_util';

export const RECEIVE_DATASETS = 'RECEIVE_DATASETS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveDatasets = (datasets) => {
  return {
    type: RECEIVE_DATASETS,
    datasets
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const seeAllDatasets = () => dispatch => {
  DataApiUtils.fetchDatasets()
    .then(
      (datasets) => (dispatch(receiveDatasets(datasets))),
      (error) => (dispatch(receiveErrors(error)))
    );
};

export const addDataset = (dataset) => dispatch => {
  DataApiUtils.sendDataset(dataset)
    .then(
      (datasets) => (dispatch(receiveDatasets(datasets))),
      (error) => (dispatch(receiveErrors(error)))
    );
};

export const removeDataset = (id) => dispatch => {
  DataApiUtils.deleteDataset(id)
    .then(
      (datasets) => (dispatch(receiveDatasets(datasets))),
      (error) => (dispatch(receiveErrors(error)))
    );
};
