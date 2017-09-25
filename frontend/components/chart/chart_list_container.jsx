import { connect } from 'react-redux';
import {
    seeAllCharts,
    deleteChart
  } from '../../actions/';
  
import ChartList from './chart_list';

const mapStateToProps = (state) => ({
  charts: state.charts
});

const mapDispatchToProps = dispatch => ({
  seeAllCharts: () => dispatch(seeAllCharts()),
  deleteChart: (id) => dispatch(deleteChart(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartList);
