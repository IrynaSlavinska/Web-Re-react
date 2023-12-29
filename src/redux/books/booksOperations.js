import {
  fetchBooksRequest,
  fetchBooksSuccess,
  fetchBooksError,
} from './booksActions';

import * as bookShelfAPI from '../../services/bookshelf-api';

export const fetchBooks = () => async dispatch => {
  dispatch(fetchBooksRequest());

  // fetch().then().catch()

  try {
    const books = await bookShelfAPI.fetchBooks();
    dispatch(fetchBooksSuccess(books));
  } catch (error) {
    dispatch(fetchBooksError(error));
  }
};
