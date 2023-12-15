import { useParams } from 'react-router-dom';

const Gallery = () => {
  const { collectionId } = useParams();

  return <div>Image gallery : {collectionId}</div>;
};

export default Gallery;

// http://localhost:3000/web-re-react/collection/dog-3/gallery
