import axios from 'axios';

export const getPosts = (page, branch, year, section) => async (dispatch) => {

    try {
        
        dispatch({type: 'LoadPostRequest'});

        //making our api call
        const {data} = await axios.get(`http://localhost:4000/api/v1/getPosts?page=${page}&branch=${branch}&year=${year}&section=${section}`);

        dispatch({type: 'LoadPostSuccess', payload: data.posts});

    } catch (error) {

        dispatch({type: 'LoadPostFailure', payload: error.message});
        
    }

};