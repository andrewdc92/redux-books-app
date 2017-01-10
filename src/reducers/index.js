import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

//below is the mapping of the state 
const rootReducer = combineReducers({
  books: BooksReducer

});

export default rootReducer;
