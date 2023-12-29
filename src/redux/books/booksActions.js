import { createAction } from '@reduxjs/toolkit';

// pending
export const fetchBooksRequest = createAction('books/fetchBooksRequest');
// fullfield
export const fetchBooksSuccess = createAction('books/fetchBooksSuccess');
// rejected
export const fetchBooksError = createAction('books/fetchBooksError');
