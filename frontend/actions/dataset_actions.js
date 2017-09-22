import * as DataApiUtils from '../util/dataset_api_util';

export const RECEIVE_DATASETS = 'RECEIVE_DATASETS';
export const RECEIVE_DATA_ERRORS = 'RECEIVE_DATA_ERRORS';

const receiveDatasets = (datasets) => {
  return {
    type: RECEIVE_DATASETS,
    datasets
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_DATA_ERRORS,
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
