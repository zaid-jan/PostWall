/* eslint-disable linebreak-style */
import { combineReducers } from 'redux';
import posts from './reducerPosts';

const allReducers = combineReducers({
    'post': posts
});

export default allReducers;
