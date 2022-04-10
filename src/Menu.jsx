import React from 'react'
import useToggle from './useToggle'
export default function Menu() {
   const [display,toggle] = useToggle(true)
   let menu=[
       {name:'home',id:1},
       {name:'about',id:2},
       {name:'Contact',id:3},
       ]
  return (
    <div>
    <button onClick={toggle}></button>
    {display && menu.map(i=>(<p key={i.id}>{i.name}</p>))}

    </div>
  )
}
