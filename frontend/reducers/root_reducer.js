import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import DatasetsReducer from './errors_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  dataset: DatasetsReducer,
  errors: ErrorsReducer
});

export default RootReducer;
