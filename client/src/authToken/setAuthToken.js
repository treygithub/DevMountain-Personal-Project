import axios from 'axios';



//This file adds the auth token to every req. if admin is logged in.

const setAuthToken = token => {
    if(token){
        //apply to every request
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        //Delete auth header
        delete axios.defaults.headers.common['Authorization'];
    }
};
export default setAuthToken;