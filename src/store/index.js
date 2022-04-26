import { createStore,combineReducers } from "redux";
import { Counter,count} from "./CounterSlice";
import { FetchReducer,FetchUsers,initialUsers } from "./FetchSlice";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
 const store=createStore(combineReducers({
    counter:Counter,
    fetch:FetchReducer
}),{
   counter:count ,
  fetch:initialUsers
},applyMiddleware(thunk))

store.dispatch(FetchUsers())

export default store