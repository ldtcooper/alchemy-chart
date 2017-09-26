import { connect } from 'react-redux';
import { addChart, seeAllCharts } from '../../actions/chart_actions';
import NewChartForm from './new_chart_form';

const mapStateToProps = (state) => ({
  datasets: state.datasets
});

const mapDispatchToProps = dispatch => ({
  saveChart: (chart) => dispatch(addChart(chart))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewChartForm);
