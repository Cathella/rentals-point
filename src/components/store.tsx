import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware, { ThunkMiddleware } from 'redux-thunk';
import authReducer from './authReducer';
import listingsReducer from './listingsReducer';
import { Listing } from '../pages/PropertyUpdateForm';

// Define the RootState type
interface RootState {
  auth: AuthState;
  listings: ListingsState;
}

const thunk = thunkMiddleware as ThunkMiddleware<RootState>;

export interface AuthState {
  isAuthenticated: boolean;
  loggedIn: boolean;
  username: string;
  account: string;
}

export interface ListingsState {
  listings: Listing[];
}

const rootReducer = combineReducers({
  auth: authReducer,
  listings: listingsReducer,
});

const store = createStore(
  rootReducer, 
  applyMiddleware(thunk as any),
);

export default store;
export type { RootState }; // Export RootState type
