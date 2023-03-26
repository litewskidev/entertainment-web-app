import { createStore, combineReducers } from "redux";
import initialState from './initialState';
import listReducer from "./listRedux";

const subreducers = {
  list: listReducer,
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
