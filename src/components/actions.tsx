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

