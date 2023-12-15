import { useParams } from 'react-router-dom';

const Subbreed = () => {
  const { collectionId } = useParams();

  return <div>Subbreed : {collectionId}</div>;
};

export default Subbreed;
