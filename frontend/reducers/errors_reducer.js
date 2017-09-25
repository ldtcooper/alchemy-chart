import SessionErrorsReducer from './session_errors_reducer';
import DatasetErrorsReducer from './dataset_errors_reducer';
import ChartErrorsReducer from './chart_errors_reducer';
import {combineReducers} from 'redux';

const ErrorsReducer = combineReducers({
  session: SessionErrorsReducer,
  dataUpload: DatasetErrorsReducer,
  chartCreate: ChartErrorsReducer
});

export default ErrorsReducer;
