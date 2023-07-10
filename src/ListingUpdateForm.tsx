import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateListing } from './actions';

const ListingUpdateForm = ({ listing }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(listing.title);
  const [description, setDescription] = useState(listing.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch the updateListing action with the updated listing details
    dispatch(updateListing(listing.id, { title, description }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <button type="submit">Update Listing</button>
    </form>
  );
};

export default ListingUpdateForm;
