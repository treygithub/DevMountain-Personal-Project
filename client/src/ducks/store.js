import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from "redux-promise-middleware"
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware, promiseMiddleware()),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : null
  )
);

export default store;