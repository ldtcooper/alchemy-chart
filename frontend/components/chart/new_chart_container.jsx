import { connect } from 'react-redux';
import { addChart, seeAllCharts } from '../../actions/chart_actions';
import { getOneDataset } from '../../actions/dataset_actions';
import NewChartForm from './new_chart_form';

const mapStateToProps = (state) => ({
  datasets: state.datasets,
  currentDataset: state.currentDataset
});

const mapDispatchToProps = dispatch => ({
  saveChart: (chart) => dispatch(addChart(chart)),
  getDataset: (id) => dispatch(getOneDataset(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewChartForm);
