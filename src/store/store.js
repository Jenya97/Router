import { createStore, combineReducers } from "redux";
import {countInitial,count} from './counter/counter'
import {infoUsers,userInitial} from './Users/user'
import {colors,change} from './changeColor/changeColor'

const store=createStore(combineReducers({
    counter:count,
    users:infoUsers,
    colors:change
}),
{
    counter:countInitial,
    users:userInitial,
    colors:colors,
})

export default store;