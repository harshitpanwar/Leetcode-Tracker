import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

export const userReducer = createReducer(initialState, {

    LoginUserRequest: (state, action)=>{
        state.loading = true;
    },
    LoginUserSuccess: (state, action)=>{
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;

    },
    LoginUserFailure: (state, action)=>{
        state.loading = false;
        state.loginError = action.payload;
    },

    LoadUserRequest: (state, action)=>{
        state.loading = true;
        state.isAuthenticated = false;
    },
    LoadUserSuccess: (state, action)=>{
        state.loading = false;
        state.user = action.payload;
        state.loadError = null;
        state.isAuthenticated = true;
    },
    LoadUserFailure: (state, action)=>{
        state.loading = false;
        state.loadError = action.payload;
        state.isAuthenticated = false;
    }



})