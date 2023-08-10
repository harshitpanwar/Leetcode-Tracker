import axios from "axios";

export const loginUser = (email, password) => async (dispatch) => {

    try {

        dispatch({type: "LoginUserRequest"});

        const {data} = await axios.post("/api/v1/login", {email, password}, {
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
  
      const { data } = await axios.get("/api/v1/me", {

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

export const logoutUser = () => async (dispatch) => {

    try {

        dispatch({type: "LogoutUserRequest"});

        const {data} = await axios.get("/api/v1/logout", {
          withCredentials:true,
          credentials: 'include',
          headers:{
              "Content-Type":"application/json"
          },
          
      });
    
        dispatch({type: "LogoutUserSuccess", payload: data.user});

    } catch (error) {
        console.log(error)
        dispatch({type: "LogoutUserFailure", payload: error.message});

    }
    

}
  