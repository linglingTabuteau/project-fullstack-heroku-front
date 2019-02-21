import { combineReducers } from 'redux';
import searchResults from './searchResults';

const allReducers = combineReducers({
  listFilms: searchResults,
});

export default allReducers;
