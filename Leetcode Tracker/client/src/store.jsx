import {configureStore} from '@reduxjs/toolkit';

import { postReducer } from './Reducers/Post';
import { userReducer } from './Reducers/User';

const store = configureStore({
    reducer: {
        getPosts: postReducer,
        user: userReducer,
    },

});

export default store;