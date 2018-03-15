import { combineReducers } from "redux";
import BooksReducer from "./books";
import ActiveReducer from "./books";

const rootReducers = combineReducers({
  books: BooksReducer
})

export default rootReducers;