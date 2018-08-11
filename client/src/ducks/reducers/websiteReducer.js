import axios from "axios";

const initialState = {
    sections: []
}

const GET_SECTIONS = "GET_SECTIONS"
const ADD_SECTION = "ADD_SECTION"
const EDIT_SECTION = "EDIT_SECTION"

export function getSections() {
    return {
        type: GET_SECTIONS,
        payload: axios.get(`/api/website/`)
    }
}

export function addSection(title,titleColor,body,bodyColor,image,currentSide) {
    return {
        type: ADD_SECTION,
        payload: axios.post(`/api/website/`, {title,titleColor,body,bodyColor,image,currentSide})
    }
}

export function editSection(id, title,titleColor,body,bodyColor,image,currentSide){
    return {
        type: EDIT_SECTION,
        payload: axios.put(`/api/website/edit/${id}`, {title,titleColor,body,bodyColor,image,currentSide})
    }
}

export default function websiteReducer(state = initialState, action) {
    switch(action.type) {
        case `${GET_SECTIONS}_FULFILLED`:
            return {
                ...state,
                sections: action.payload.data
            }
        case `${ADD_SECTION}_FULFILLED`:
            return {
                ...state,
                sections: action.payload.data
            }
        case `${EDIT_SECTION}_FULFILLED`:
            return {
                ...state,
                sections: action.payload.data
            }
        default :
            return state
    }
} 