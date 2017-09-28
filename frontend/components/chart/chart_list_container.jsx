import { connect } from 'react-redux';
import {
    seeAllCharts,
    deleteChart
  } from '../../actions/chart_actions';

import ChartList from './chart_list';

const mapStateToProps = (state) => ({
  charts: state.charts,
  errors: state.errors.chartCreate
});

const mapDispatchToProps = dispatch => ({
  seeAllCharts: () => dispatch(seeAllCharts()),
  deleteChart: (id) => dispatch(deleteChart(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartList);
