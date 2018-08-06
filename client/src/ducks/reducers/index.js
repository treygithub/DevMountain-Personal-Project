import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorsReducer from './errorsReducer';
import newProductReducer from './newProductReducer';


export default combineReducers({
    auth: authReducer,
    errors: errorsReducer,
    product: newProductReducer
});