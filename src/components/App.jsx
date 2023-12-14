import { useEffect, useState } from 'react';
import { BigCards } from './BigCards';

export const App = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log(page);
    console.log(query);
    console.log('fetch data');
  }, [page, query]);

  const handleSubmit = e => {
    e.preventDefault();

    setPage(1);
    setQuery(e.target.elements.query.value);
    setItems([]);

    e.target.reset();
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <BigCards />
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
      <button type="button" onClick={loadMore}>
        Load more
      </button>
    </div>
  );
};
