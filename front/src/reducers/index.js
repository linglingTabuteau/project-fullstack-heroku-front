import { combineReducers } from 'redux';
import searchResults from './searchResults';
import authProfile from './authProfile';

const allReducers = combineReducers({
  listFilms: searchResults,
  auth: authProfile,
});

export default allReducers;
