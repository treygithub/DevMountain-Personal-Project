import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorsReducer from './errorsReducer';
import websiteReducer from './websiteReducer'


export default combineReducers({
    auth: authReducer,
    errors: errorsReducer,
    website: websiteReducer
});