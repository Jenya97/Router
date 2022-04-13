export function infoUsers(state=[],action){
    if(action.type==='remove'){
        return state.filter(i=>i.id!==action.payload.id)
    }
    return state
}


export const userInitial=[
    {id:Date.now(),name:'ani'},
    {id:2,name:'Vardan'},
    {id:3,name:'armen'},
    {id:4,name:'hakob'}
]


export function deleteUsers(id){
    return{
        type:"remove",
        payload:{
            id:id
        }
    }
}