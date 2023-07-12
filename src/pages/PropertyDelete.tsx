import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { deleteListing } from '../components/actions';

const PropertyDelete = () => {
  const { propertyId } = useParams<{ propertyId: string | undefined }>();
  const dispatch: Dispatch<any> = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const deleteProperty = async () => {
      try {
        if (propertyId) {
          // Dispatch the deleteListing action
          await dispatch(deleteListing(parseInt(propertyId)));

          // Navigate back to the property list after deleting
          navigate('/propertylist');
        }
      } catch (error) {
        console.log(error);
      }
    };
    
    deleteProperty();
    
  }, [dispatch, navigate, propertyId]);

  return null; // or you can display a loading spinner or confirmation message here
};

export default PropertyDelete;
