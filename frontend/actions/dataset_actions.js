import * as DataApiUtils from '../util/dataset_api_util';

export const RECEIVE_DATASETS = 'RECEIVE_DATASETS';
export const SAVE_DATASET = 'SAVE_DATASET';
export const REMOVE_DATASET = 'REMOVE_DATASET';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveDatasets = (datasets) => {
  return {
    type: RECEIVE_DATASETS,
    datasets
  };
};

const saveDataset = (dataset) => {
  return {
    type: SAVE_DATASET,
    dataset
  };
};

const removeDataset = (dataset) => {
  return {
    type: REMOVE_DATASET
  };
};
