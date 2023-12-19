// import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Collection = () => {
  const [dogs, setDogs] = useState([
    'dog-1',
    'dog-2',
    'dog-3',
    'dog-4',
    'dog-5',
  ]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  console.log(location);

  const dogId = searchParams.get('dogId') ?? '';

  //   useEffect(() => {
  // http-request
  //   }, []);

  const updateQueryString = evt => {
    const dogIdValue = evt.target.value;

    if (dogIdValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ dogId: dogIdValue });
  };

  const visibleDogs = dogs.filter(dog => dog.includes(dogId));

  return (
    <div>
      <input type="text" name="" value={dogId} onChange={updateQueryString} />
      {/* <button onClick={() => setSearchParams({ c: 'hello' })}>click</button> */}

      <ul>
        {visibleDogs.map(dog => {
          return (
            <li key={dog}>
              <Link to={`${dog}`} state={{ from: location }}>
                {dog}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Collection;
