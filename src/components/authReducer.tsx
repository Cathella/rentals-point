import { AuthState } from './store';

// Define the initial state
const initialState: AuthState = {
  isAuthenticated: false,
  loggedIn: false,
  username: '',
  account: '',
};

// Define the action types
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

// Define the action creators
export const loginSuccess = (username: string, account: string) => ({
  type: LOGIN_SUCCESS as typeof LOGIN_SUCCESS,
  payload: {
    loggedIn: true,
    username,
    account,
  },
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS as typeof LOGOUT_SUCCESS,
});

// Define the reducer function
const authReducer = (state: AuthState = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loggedIn: true,
        username: action.payload.username,
        account: action.payload.account,
      };
    case LOGOUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
