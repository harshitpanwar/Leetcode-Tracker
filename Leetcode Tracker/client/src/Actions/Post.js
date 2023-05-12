import axios from 'axios';

export const getPosts = (page, branch, year, section, searchQuery) => async (dispatch) => {

    try {
        
        dispatch({type: 'LoadPostRequest'});

        //making our api call
        const {data} = await axios.get(`http://127.0.0.1:4000/api/v1/getPosts?page=${page}&branch=${branch}&year=${year}&section=${section}&searchQuery=${searchQuery}`, {
            withCredentials:true,
            credentials: 'include',
            
        });
        console.log(`http://localhost:4000/api/v1/getPosts?page=${page}&branch=${branch}&year=${year}&section=${section}&searchQuery=${searchQuery}`);
        dispatch({type: 'LoadPostSuccess', payload: data.posts, count: data.count});

    } catch (error) {

        dispatch({type: 'LoadPostFailure', payload: error.message});
        
    }

};