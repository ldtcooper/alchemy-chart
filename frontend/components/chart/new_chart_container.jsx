import { connect } from 'react-redux';
import { addChart, seeAllCharts } from '../../actions/chart_actions';
import { getOneDataset, seeAllDatasets } from '../../actions/dataset_actions';
import NewChartForm from './new_chart_form';

const mapStateToProps = (state) => ({
  datasets: state.datasets,
  currentDataset: state.currentDataset,
  errors: state.errors.chartCreate
});

const mapDispatchToProps = dispatch => ({
  saveChart: (chart) => dispatch(addChart(chart)),
  getDataset: (id) => dispatch(getOneDataset(id)),
  getDatasets: () => dispatch(seeAllDatasets())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewChartForm);
