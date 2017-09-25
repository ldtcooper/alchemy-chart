import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import DatasetsReducer from './dataset_reducer';
import ChartsReducer from './charts_reducer';
import CurrentChartReducer from './current_chart_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  datasets: DatasetsReducer,
  charts: ChartsReducer,
  currentChart: CurrentChartReducer,
  errors: ErrorsReducer
});

export default RootReducer;
