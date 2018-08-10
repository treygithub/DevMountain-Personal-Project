import { createStore,  combineReducers, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from "redux-promise-middleware"
import thunk from 'redux-thunk';

const middleware = [thunk];

const rootReducer = combineReducers({})

const store = createStore(rootReducer, applyMiddleware(promiseMiddleware()));

export default store;