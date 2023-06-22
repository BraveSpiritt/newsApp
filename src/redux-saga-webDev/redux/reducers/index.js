import { combineReducers } from "redux";
import news from "./news";
import errors from "./error";


const reducer = combineReducers({
    news,
    errors,
})


export default reducer;