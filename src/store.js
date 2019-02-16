import { createStore } from 'redux';
import allReducers from '../src/reducers/index';

const store = createStore(allReducers);

export default store;