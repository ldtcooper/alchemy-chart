import SessionErrorsReducer from './session_errors_reducer';
import DatasetErrorsReducer from './dataset_errors_reducer';
import {combineReducers} from 'redux';

const ErrorsReducer = combineReducers({
  session: SessionErrorsReducer,
  dataUpload: DatasetErrorsReducer
});

export default ErrorsReducer;
