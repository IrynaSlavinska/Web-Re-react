// import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Collection = () => {
  //   useEffect(() => {
  // http-request
  //   }, []);

  return (
    <div>
      {['dog-1', 'dog-2', 'dog-3', 'dog-4', 'dog-5'].map(dog => (
        <Link to={`${dog}`} key={dog}>
          {dog}
        </Link>
      ))}
    </div>
  );
};

export default Collection;
