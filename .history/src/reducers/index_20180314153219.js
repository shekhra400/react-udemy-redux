import { combineReducers } from "redux";
import { BooksReducer } from "./books";

const rootReducers = combineReducers({
  bookReducers = BooksReducer
})

export default rootReducers;