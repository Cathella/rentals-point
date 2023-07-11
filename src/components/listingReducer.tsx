interface Listing {
  id: number;
  title: string;
  description: string;
  // Add other properties as needed
}

interface ListingState {
  listings: Listing[];
}

const initialState: ListingState = {
  listings: [],
};

const listingReducer = (state = initialState, action: { type: string; payload?: any }): ListingState => {
  switch (action.type) {
    case 'CREATE_LISTING': {
      return {
        ...state,
        listings: [...state.listings, action.payload],
      };
    }
    case 'UPDATE_LISTING': {
      const updatedListings = state.listings.map((listing: Listing) => {
        if (listing.id === action.payload.id) {
          return { ...listing, ...action.payload.updatedListing };
        }
        return listing;
      });
      return {
        ...state,
        listings: updatedListings,
      };
    }
    case 'DELETE_LISTING': {
      const filteredListings = state.listings.filter((listing: Listing) => listing.id !== action.payload.id);
      return {
        ...state,
        listings: filteredListings,
      };
    }
    default:
      return state;
  }
};

export default listingReducer;
