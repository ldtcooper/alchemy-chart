import { connect } from 'react-redux';
import { shareChart } from '../../actions/share_actions';
import { fetchUsers } from '../../actions/user_actions';
import SharePage from './share_page';

const mapStateToProps = (state) => ({
  users: state.users
});

const mapDispatchToProps = (dispatch) => ({
  shareChart: (userId, chartId) => (dispatch(shareChart(userId, chartId))),
  fetchUsers: () => (dispatch(fetchUsers()))
});

export default connect(mapStateToProps, mapDispatchToProps)(SharePage);
