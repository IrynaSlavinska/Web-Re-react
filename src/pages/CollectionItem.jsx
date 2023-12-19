import { useRef } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';

const CollectionItem = () => {
  //   const params = useParams();
  const { collectionId } = useParams();
  const location = useLocation();

  const backLinkLocationRef = useRef(location.state?.from ?? '/collection');

  // console.log(location);
  // console.log(collectionId);

  //   useEffect(() => {
  // http-request
  //   }, [collectionId]);

  return (
    <>
      <h1>Dog Details: {collectionId}</h1>
      {/* <Link to={/collection}>Back to collection</Link> */}
      {/* буде працювати, але ми повертаємось до базової сторінки без фільтрів  */}

      {/* <Link to={location.state.from}>Back to collection</Link> */}
      {/* якщо заходити на урл з іншої сторінки - код падає, бо стейту не існує - він налл */}
      <Link to={backLinkLocationRef.current}>Back to collection</Link>

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
