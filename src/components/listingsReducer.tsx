// In your reducer file
const initialState = {
  // Initial state for listings
};

const listingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_LISTING':
      const { listingId, updatedListing } = action.payload;
      // Find the listing in state and update its details
      const updatedListings = state.listings.map((listing) =>
        listing.id === listingId ? { ...listing, ...updatedListing } : listing
      );
      return { ...state, listings: updatedListings };
    // Add other cases for different actions
    default:
      return state;
  }
};

export default listingsReducer;