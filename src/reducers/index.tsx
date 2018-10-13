import { combineReducers } from "redux";
import { userReducer } from './userReducer';
import { tokenReducer } from './tokenReducer';
import { searchReducer } from './searchReducer';
import { listingReducer } from './listingReducer';

export default combineReducers({
  userReducer,
  tokenReducer,
  searchReducer,
  listingReducer
});