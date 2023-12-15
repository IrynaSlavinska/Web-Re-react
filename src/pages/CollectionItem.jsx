import { Outlet, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CollectionItem = () => {
  //   const params = useParams();
  const { collectionId } = useParams();
  console.log(collectionId);

  //   useEffect(() => {
  // http-request
  //   }, [collectionId]);

  return (
    <>
      <h1>Dog Details: {collectionId}</h1>
      <ul>
        <li>
          <Link to="subbreed">Subbreed</Link>
          <Link to="gallery">Gallery</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default CollectionItem;
