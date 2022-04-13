import React,{useReducer,useState} from 'react'
import reducer from './reducer'
import { useSelector,useDispatch } from 'react-redux'
import {increment,decrement,reset} from './store/counter/counter';
import { deleteUsers } from './store/Users/user';
import {changeing} from './store/changeColor/changeColor'
export default function App() {
    // const count=useSelector((state)=>state.counter);
    // const users=useSelector(state=>state.users);
    // const[counter,dispatch] = useReducer(reducer,0)
    const [guyn,setGuyn]=useState()
    const [count,users,colors]=useSelector(state=>[
        state.counter,
        state.users,
        state.colors
    ])
    console.log(colors);
    const dispatch=useDispatch()
  return (
    <div>
        <button onClick={()=>setGuyn(prompt())}></button>
        {count}
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
        <button onClick={()=>dispatch(reset())}>reset</button>
        <button onClick={()=>dispatch(changeing(guyn))}>color</button>
     {users.map(i=>(
         <li key={i.id}
          onClick={()=>dispatch(deleteUsers(i.id))} 
          style={{color:colors.color}}>
            {i.name}
              </li>
     ))}







    {/* {counter}
    <button onClick={()=>dispatch(
        {
            type:'Increment',
            payload:5
        }
        )}>+</button>
    <button onClick={()=>dispatch({type:'Decrement'})}>-</button>
    <button onClick={()=>dispatch({type:'Reset'})}>reset</button> */}

    </div>
  )
}
