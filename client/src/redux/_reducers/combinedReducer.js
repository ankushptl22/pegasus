import { combineReducers } from "redux"

import providerReducer from "./providerGraphReducer"
import reducerCount from "./providerCountReducer"

import reducerHierarchicalData from "./appLevelDataReducer"
export default combineReducers({
  providerReducer,
  reducerCount,
  reducerHierarchicalData
})
