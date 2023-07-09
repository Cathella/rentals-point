import { createStore, combineReducers } from 'redux';
import authReducer from './authReducer';

// Define the RootState type
interface RootState {
  auth: {
    isAuthenticated: boolean;
  };
  // Add other state slices if needed
}

const rootReducer = combineReducers({
  auth: authReducer,
  // Add other reducers if needed
});

const store = createStore(rootReducer);

export default store;
export type { RootState }; // Export RootState type
