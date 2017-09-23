import { connect } from 'react-redux';
import { addDataset } from '../../actions/dataset_actions';
import DataUpload from './data_upload';

const mapStateToProps = (state) => ({
  errors: state.errors.dataUpload
});

const mapDispatchToProps = (dispatch) => ({
  addDataset: (dataset) => dispatch(addDataset(dataset))
});

export default connect(mapStateToProps, mapDispatchToProps)(DataUpload);
