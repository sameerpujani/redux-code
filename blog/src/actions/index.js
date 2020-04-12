import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    });
};

export const fetchUsers = (userId) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${userId}`);
    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    });
};