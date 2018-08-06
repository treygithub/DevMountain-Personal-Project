import { createStore,  applyMiddleware } from 'redux'
import promiseMiddleware from "redux-promise-middleware";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

const initialState = {};
const middleware = [thunk, promiseMiddleware];

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)
    ));

export default store;