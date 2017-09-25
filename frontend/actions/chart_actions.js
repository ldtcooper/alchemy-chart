import * as ChartApiUtils from '../util/dataset_api_util';

export const RECEIVE_CHARTS = 'RECEIVE_CHARTS';
export const RECEIVE_CHART = 'RECEIVE_CHART';
export const RECEIVE_CHART_ERRORS = 'RECEIVE_CHART_ERRORS';

const receiveCharts = (charts) => {
  return {
    type: RECEIVE_CHARTS,
    charts
  };
};

const receiveChart = (chart) => {
  return {
    type: RECEIVE_CHART,
    chart
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_CHART_ERRORS,
    errors
  };
};
