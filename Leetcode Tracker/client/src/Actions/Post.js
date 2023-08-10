import axios from 'axios';

export const getPosts = (page, branch, year, section, searchQuery) => async (dispatch) => {

    try {
        
        dispatch({type: 'LoadPostRequest'});

        //making our api call
        const {data} = await axios.get(`/api/v1/getPosts?page=${page}&branch=${branch}&year=${year}&section=${section}&searchQuery=${searchQuery}`, {
            withCredentials:true,
            credentials: 'include',
            
        });
        console.log(`/api/v1/getPosts?page=${page}&branch=${branch}&year=${year}&section=${section}&searchQuery=${searchQuery}`);
        dispatch({type: 'LoadPostSuccess', payload: data.posts, count: data.count});

    } catch (error) {

        dispatch({type: 'LoadPostFailure', payload: error.message});
        
    }

};

export const addPost = (name, email, year, branch, section, leetcode, gfg) => async (dispatch) => {

    console.log(name, email, year, branch, section, leetcode, gfg)
    try {
        
        dispatch({type: 'AddPostRequest'});

        //making our api call
        const {data} = await axios.post("/api/v1/createPost", {
            name,
            email,
            year,
            branch,
            section,
            leetcode,
            gfg
        }, 
        {
          withCredentials:true,
          credentials: 'include',
          headers:{
              "Content-Type":"application/json"
          },
          
      });

        console.log("data ", data);

        dispatch({type: 'AddPostSuccess', payload: data.message});

    } catch (error) {
        console.log("error")
        dispatch({type: 'AddPostFailure', payload: error.message});


    }

}