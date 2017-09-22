import { connect } from 'react-redux';
import {
    removeDataset,
    seeAllDatasets
  } from '../../actions/dataset_actions';
import DatasetList from './dataset_list';

const mapStateToProps = (state) => ({
  datasets: state.datasets
});

const mapDispatchToProps = (dispatch) => ({
  seeAllDatasets: () => dispatch(seeAllDatasets()),
  removeDataset: (id) => dispatch(removeDataset(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DatasetList);
