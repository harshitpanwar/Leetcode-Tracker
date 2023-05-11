import {createReducer} from '@reduxjs/toolkit';

const initialState = {};

export const postReducer = createReducer(initialState, {

    LoadPostRequest: (state, action) => {
        state.loading = true;
    },
    LoadPostSuccess: (state, action) => {
        state.loading = false;
        state.posts = action.payload;
        state.count = action.count;
    },
    LoadPostFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

});