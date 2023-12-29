import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as booksOperations from '../redux/books/booksOperations';

export default function BooksView() {
  const dispatch = useDispatch();

  const books = useSelector(state => state.books.entities);

  useEffect(() => dispatch(booksOperations.fetchBooks()), [dispatch]);
}
