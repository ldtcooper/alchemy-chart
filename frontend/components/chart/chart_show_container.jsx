import { connect } from 'react-redux';
import { seeOneChart } from '../../actions/chart_actions';
import ChartShow from './chart_show';

const mapStateToProps = (state) => ({
  currentChart: state.currentChart
});

const mapDispatchToProps = dispatch => ({
  getCurrentChart: (id) => (dispatch(seeOneChart(id)))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChartShow);
