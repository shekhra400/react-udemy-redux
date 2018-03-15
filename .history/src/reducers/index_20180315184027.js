import { combineReducers } from "redux";
import BooksReducer from "./books";
import ActiveReducer from "./book_active";

const rootReducers = combineReducers({
  books: BooksReducer,
  activeBook:
})

export default rootReducers;