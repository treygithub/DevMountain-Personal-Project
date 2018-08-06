import axios from "axios";

const initialState = {
    product:{}
}

const ADD_PRODUCT = "ADD_PRODUCT";

export function addProduct(name, price, desc, catId, productImg){
    return {
        type: ADD_PRODUCT,
        payload: axios.post("/api/product", {name, price, desc, catId, productImg})
    }
}

export default function(state = initialState, action) {
    switch(action.type){
        case `${ADD_PRODUCT}_FULFILLED`:
        return{
            ...state,
            product: action.payload.data
        }
        default:
        return state;
    }
}