import axios from "axios";

export const loginUser = (email, password) => async (dispatch) => {

    try {

        dispatch({type: "LoginUserRequest"});

        const {data} = await axios.post("http://localhost:4000/api/v1/login", {email, password}, {
          withCredentials:true,
          credentials: 'include',
          headers:{
              "Content-Type":"application/json"
          },
          
      });


        console.log(data)

        dispatch({type: "LoginUserSuccess", payload: data.user});
        
    } catch (error) {
        console.log(error)
        dispatch({type: "LoginUserFailure", payload: error.message});

    }

};

export const loadUser = () => async (dispatch) => {
    try {
      dispatch({
        type: "LoadUserRequest",
      });
  
      const { data } = await axios.get("http://localhost:4000/api/v1/me", {

        withCredentials:true,
        credentials: 'include',
        headers:{
            "Content-Type":"application/json"
        },

      });
      console.log(data)
      dispatch({
        type: "LoadUserSuccess",
        payload: data.user,
      });
    } catch (error) {
      console.log(error)
      dispatch({
        type: "LoadUserFailure",
        payload: error.message  ,
      });
    }
  };
  