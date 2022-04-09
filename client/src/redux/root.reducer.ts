import { combineReducers } from 'redux';

import uiReducer from './UI/ui.reducer';

export default combineReducers({
  ui: uiReducer,
});
