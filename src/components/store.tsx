import { createStore, combineReducers } from 'redux';
import authReducer from './authReducer';
import listingReducer from './listingReducer';

// Define the RootState type
interface RootState {
  auth: {
    isAuthenticated: boolean;
  };
  // Add other state slices if needed
}

const rootReducer = combineReducers({
  auth: authReducer,
  listing: listingReducer,
  // Add other reducers if needed
});

const store = createStore(rootReducer);

export default store;
export type { RootState }; // Export RootState type
