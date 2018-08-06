import axios from 'axios';
import setAuthToken from '../../authToken/setAuthToken';
import jwt_decode from 'jwt-decode';
import { SET_CURRENT_ADMIN } from './types';
import { GET_ERRORS } from './types';



export const registerAdmin = (newAdmin, history) => dispatch => {
    axios.post('/api/admin/register',(newAdmin))
    .then(res => history.push('./Dashboard'))
    .catch(err => 
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    );
};

export const loginAdmin = adminData => dispatch =>{
    axios.post('./api/admin/login', (adminData))
    .then(res => {
        //save to your local storage
        const { token } = res.data;
        // set token too local storage
        localStorage.setItem('jwt', token);
        //set token to auth header
        setAuthToken(token);
        //decode bearer token to string
        const decoded = jwt_decode(token);
        dispatch(setCurrentAdmin(decoded));
    })
    .catch(err =>
    dispatch({
        type: GET_ERRORS,
        payload:err.response.data
    })
    );
};

//set logged in decoded admin token
export const setCurrentAdmin = (decoded) => {
    return{
        type: SET_CURRENT_ADMIN,
        payload: decoded
    }
}