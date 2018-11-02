import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';

import providerReducer from "./providerGraphReducer"
import reducerCount from "./providerCountReducer"

import reducerHierarchicalData from "./appLevelDataReducer"

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  providerReducer,
  reducerCount,

  reducerHierarchicalData
});

export default rootReducer;