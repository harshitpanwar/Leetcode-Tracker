import {configureStore} from '@reduxjs/toolkit';

import { postReducer } from './Reducers/Post';

const store = configureStore({
    reducer: {
        getPosts: postReducer,
    },

});

export default store;