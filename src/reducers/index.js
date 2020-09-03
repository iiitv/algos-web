import { combineReducers } from 'redux';

import ghReducer from './ghReducer';

export default combineReducers({
  gh: ghReducer,
});
