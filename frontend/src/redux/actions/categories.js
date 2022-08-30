import axios from "axios";
import {
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAIL,
} from "./types";

const config = {
    Headers: {
        'Accept': 'application/json'
    }
}

export const get_categories = () => async dispatch => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/category/categories`, config);
        console.log(res.data);

        if(res.status === 200) {
            dispatch({
                type: GET_CATEGORIES_SUCCESS,
                payload: res.data
            })
        } else {
            dispatch({
                type: GET_CATEGORIES_FAIL
            })
        }
    } catch (error) {
        
    }
}