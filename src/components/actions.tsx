import { Dispatch, AnyAction } from "redux";
import { ThunkAction } from 'redux-thunk';
import { RootState } from "./store";

export const login = () => {
  return {
    type: 'LOGIN',
    payload: true, // Set the payload to indicate the user is authenticated
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
    payload: false, // Set the payload to indicate the user is not authenticated
  };
};

export const createListing = (createdListing: any) => {
  return {
    type: 'CREATE_LISTING',
    payload: { createdListing },
  };
};

export const updateListing = (propertyId: number, updatedValues: any) => {
  return {
    type: 'UPDATE_LISTING',
    payload: { propertyId, updatedValues },
  };
};

export const deleteListing = (propertyId: number): ThunkAction<void, RootState, null, AnyAction> => {
  return async (dispatch) => {
    try {
      // Make the API call to delete the property
      await fetch(`http://localhost:3000/api/v1/properties/${propertyId}`, {
        method: 'DELETE',
      });

      // Dispatch the DELETE_LISTING action
      dispatch({ type: 'DELETE_LISTING', payload: propertyId });
      console.log('Property deleted'); // Log a success message
    } catch (error) {
      console.error('Failed to delete property', error);
    }
  };
};
