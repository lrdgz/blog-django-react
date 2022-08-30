import { 
    GET_BLOG_FAIL, 
    GET_BLOG_PAGINATION_RESULTS_FAIL, 
    GET_BLOG_PAGINATION_RESULTS_SUCCESS, 
    GET_BLOG_SUCCESS,
    GET_BLOG_LIST_CATEGORIES_SUCCESS,
    GET_BLOG_LIST_CATEGORIES_FAIL
} from "../actions/types";

const initialState = {
    blog_list_pagination: null,
    blog_list_category_pagination: null,
    post: null,
    count: null,
    next: null,
    previous: null,
};

export default function blog (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_BLOG_PAGINATION_RESULTS_SUCCESS:
            return {
                ...state, 
                blog_list_pagination: payload.results.posts,
                count: payload.results.count,
                next: payload.results.next,
                previous: payload.results.previous,
            }
        case GET_BLOG_PAGINATION_RESULTS_FAIL:
            return {
                ...state, 
                blog_list_pagination: null,
                count: null,
                next: null,
                previous: null,
            }
        case GET_BLOG_LIST_CATEGORIES_SUCCESS:
            return {
                ...state, 
                blog_list_category_pagination: payload.results.posts,
                count: payload.results.count,
                next: payload.results.next,
                previous: payload.results.previous,
            }
        case GET_BLOG_LIST_CATEGORIES_FAIL:
            return {
                ...state, 
                blog_list_category_pagination: null,
                count: null,
                next: null,
                previous: null,
            }
        case GET_BLOG_SUCCESS:
            return {
                ...state, 
                blog: payload.results.post
            }
        case GET_BLOG_FAIL:
            return {
                ...state, 
                blog: null
            }
        default: return state;
    }
}