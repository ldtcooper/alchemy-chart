import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import DatasetsReducer from './dataset_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  datasets: DatasetsReducer,
  errors: ErrorsReducer
});

export default RootReducer;
