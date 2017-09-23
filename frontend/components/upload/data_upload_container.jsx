import { connect } from 'react-redux';
import { addDataset } from '../../actions/dataset_actions';
import DataUpload from './data_upload';

const mapDispatchToProps = (dispatch) => ({
  addDataset: (dataset) => addDataset(dataset)
});

export default connect(null, mapDispatchToProps)(DataUpload);
