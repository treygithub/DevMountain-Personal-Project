import isEmpty from '../../validation/isEmpty';
import { SET_CURRENT_ADMIN }  from '../actions/types';


const initialState = {
    isAuthenticated: false,
    admin:{},
    test:''
}

export default function(state = initialState, action) {
    switch(action.type){
        case SET_CURRENT_ADMIN:
        return{
            ...state,
            isAuthenticated: !isEmpty(action.payload),
            admin: action.payload
        }
        default:
        return state;
    }
}