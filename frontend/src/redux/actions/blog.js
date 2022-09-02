import axios from "axios";
import {
    GET_BLOG_PAGINATION_RESULTS_SUCCESS,
    GET_BLOG_PAGINATION_RESULTS_FAIL,
    GET_BLOG_LIST_CATEGORIES_SUCCESS,
    GET_BLOG_LIST_CATEGORIES_FAIL,
    GET_BLOG_SUCCESS,
    GET_BLOG_FAIL,
    GET_BLOG_PAGINATION_SEARCH_SUCCESS,
    GET_BLOG_PAGINATION_SEARCH_FAIL
} from "./types";

const config = {
    Headers: {
        'Accept': 'application/json'
    }
}

export const get_blog_list = () => async dispatch => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/`, config);

        if(res.status === 200) {
            dispatch({
                type: GET_BLOG_PAGINATION_RESULTS_SUCCESS,
                payload: res.data
            })
        } else {
            dispatch({
                type: GET_BLOG_PAGINATION_RESULTS_FAIL
            })
        }
    } catch (error) {
        
    }
}

export const get_blog_list_page = (page) => async dispatch => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/?p=${page}`, config);

        if(res.status === 200) {
            dispatch({
                type: GET_BLOG_PAGINATION_RESULTS_SUCCESS,
                payload: res.data
            })
        } else {
            dispatch({
                type: GET_BLOG_PAGINATION_RESULTS_FAIL
            })
        }
    } catch (error) {
        
    }
}

export const get_blog_list_category = (category_id) => async dispatch => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/category/${category_id}`, config);

        if(res.status === 200) {
            dispatch({
                type: GET_BLOG_LIST_CATEGORIES_SUCCESS,
                payload: res.data
            })
        } else {
            dispatch({
                type: GET_BLOG_LIST_CATEGORIES_FAIL
            })
        }
    } catch (error) {
        
    }
}

export const get_blog_list_page_category = (category_id, page) => async dispatch => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/category/${category_id}?p=${page}`, config);

        if(res.status === 200) {
            dispatch({
                type: GET_BLOG_LIST_CATEGORIES_SUCCESS,
                payload: res.data
            })
        } else {
            dispatch({
                type: GET_BLOG_LIST_CATEGORIES_FAIL
            })
        }
    } catch (error) {
        
    }
}

export const get_blog = (slug) => async dispatch => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/${slug}`, config);

        if(res.status === 200) {
            dispatch({
                type: GET_BLOG_SUCCESS,
                payload: res.data
            })
        } else {
            dispatch({
                type: GET_BLOG_FAIL
            })
        }
    } catch (error) {
        dispatch({
            type: GET_BLOG_FAIL
        })
    }
}

export const search_blog = (search_term) => async dispatch => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/search/${search_term}`, config);

        if(res.status === 200) {
            dispatch({
                type: GET_BLOG_PAGINATION_SEARCH_SUCCESS,
                payload: res.data
            })
        } else {
            dispatch({
                type: GET_BLOG_PAGINATION_SEARCH_FAIL
            })
        }
    } catch (error) {
        dispatch({
            type: GET_BLOG_PAGINATION_SEARCH_FAIL
        })
    }
}