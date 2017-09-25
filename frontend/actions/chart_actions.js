import * as ChartApiUtils from '../util/chart_api_util';

export const RECEIVE_CHARTS = 'RECEIVE_CHARTS';
export const RECEIVE_CHART = 'RECEIVE_CHART';
export const RECEIVE_CHART_ERRORS = 'RECEIVE_CHART_ERRORS';
export const REMOVE_FRONTEND_CHART = 'REMOVE_FRONTEND_CHART';

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

const removeFrontendChart = (id) => {
  return {
    type: REMOVE_FRONTEND_CHART,
    id
  };
};

export const seeAllCharts = () => dispatch => {
  ChartApiUtils.fetchCharts()
  .then(
    (charts) => dispatch(receiveCharts(charts)),
    (err) => dispatch(receiveErrors(err))
  );
};

export const seeOneChart = (id) => dispatch => {
  ChartApiUtils.fetchChart(id)
  .then(
    (chart) => dispatch(receiveChart(chart)),
    (err) => dispatch(receiveErrors(err))
  );
};

export const addChart = (chart) => dispatch => {
  ChartApiUtils.createChart(chart).
  then(
    null,
    (err) => dispatch(receiveErrors(err))
  );
};

export const deleteChart = (id) => dispatch => {
  ChartApiUtils.deleteChart(id)
  .then(
    null,
    (err) => dispatch(receiveErrors(err))
  );
};
