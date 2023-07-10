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

export const updateListing = (listingId, updatedListing) => ({
  type: 'UPDATE_LISTING',
  payload: { listingId, updatedListing },
});

