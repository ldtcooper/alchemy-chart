import * as DataApiUtils from '../util/dataset_api_util';

export const RECEIVE_DATASETS = 'RECEIVE_DATASETS';
export const RECEIVE_DATASET = 'RECEIVE_DATASET';
export const RECEIVE_DATA_ERRORS = 'RECEIVE_DATA_ERRORS';
export const REMOVE_FRONTEND_DATASET = 'REMOVE_FRONTEND_DATASET';

const receiveDatasets = (datasets) => {
  return {
    type: RECEIVE_DATASETS,
    datasets
  };
};

const receiveDataset = (dataset) => {
  return {
    type: RECEIVE_DATASET,
    dataset: {
      id: dataset.id,
      dataset_name: dataset.dataset_name,
      data_text: JSON.parse(dataset.data_text)
    }
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_DATA_ERRORS,
    errors
  };
};

const removeFrontendDataset = (id) => {
  return {
    type: REMOVE_FRONTEND_DATASET,
    id
  };
};

export const seeAllDatasets = () => dispatch => {
  DataApiUtils.fetchDatasets()
    .then(
      (datasets) => (dispatch(receiveDatasets(datasets))),
      (error) => (dispatch(receiveErrors(error.responseJSON)))
    );
};

export const getOneDataset = (id) => dispatch => {
  return DataApiUtils.fetchDataset(id)
  .then(
    (dataset) => (dispatch(receiveDataset(dataset))),
    (error) => (dispatch(receiveErrors(error.responseJSON)))
  );
};

export const addDataset = (dataset) => dispatch => {
  DataApiUtils.sendDataset(dataset)
    .then(
      null,
      (error) => (dispatch(receiveErrors(error.responseJSON)))
    );
};

export const removeDataset = (id) => dispatch => {
  DataApiUtils.deleteDataset(id)
    .then(
      (removeId) => (dispatch(removeFrontendDataset(removeId))),
      (error) => (dispatch(receiveErrors(error.responseJSON)))
    );
};
