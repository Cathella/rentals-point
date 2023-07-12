import { createStore, combineReducers } from 'redux';
import authReducer from './authReducer';
import listingsReducer from './listingsReducer';
import { Listing } from '../pages/PropertyUpdateForm';

// Define the RootState type
interface RootState {
  auth: {
    isAuthenticated: boolean;
  };
  listings: {
    listings: Listing[];
  };
}

const rootReducer = combineReducers({
  auth: authReducer,
  listings: listingsReducer,
  // Add other reducers if needed
});

const store = createStore(rootReducer);

export default store;
export type { RootState }; // Export RootState type
