import { combineReducers } from 'redux';
import posts from "./posts";
import auth from './auth';

const root = combineReducers({posts, auth});

export default root;