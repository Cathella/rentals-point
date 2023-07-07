import { createStore } from 'redux';
import { Provider } from 'react-redux';
import authReducer from './authReducer';

const store = createStore(authReducer);

export default store;
