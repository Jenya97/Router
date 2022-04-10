import { useState } from "react";

const useToggle=(initialState=false)=>{
    const [display,setDisplay]=useState(initialState)
    
    const toggle=()=>setDisplay(!display)
    
    return [display,toggle]

}

export default useToggle;