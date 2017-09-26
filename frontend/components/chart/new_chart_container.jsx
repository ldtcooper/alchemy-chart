import { connect } from 'react-redux';
import { addChart } from '../../actions/chart_actions';
import NewChartForm from './new_chart_form';

const mapStateToProps = (state) => ({
  currentChart: state.currentChart
});

const mapDispatchToProps = dispatch => ({
  saveChart: (chart) => dispatch(addChart(chart))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewChartForm);
