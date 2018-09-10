import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from "redux-promise-middleware"
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
    applyMiddleware(...middleware, promiseMiddleware())
);

export default store;