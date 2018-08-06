import { createStore,  combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const middleware = [thunk];

const rootReducer = combineReducers({})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)
    ));

export default store;