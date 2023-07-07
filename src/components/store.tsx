import { createStore } from 'redux';
import authReducer from './authReducer';

const store = createStore(authReducer);

export default store;
