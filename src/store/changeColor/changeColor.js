export const colors={
    color:'black'
}

export function change(state=null,action){
    switch(action.type){
        case 'change':
            return {
                color:action.payload.color
            }
            default :
            return state
    }
}


 export const changeing=(color)=>({
    type:'change',
    payload:{
        color:color
    }
})