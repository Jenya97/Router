import axios from "axios"

export const initialUsers={
    loading:false,
    users:[],
    error:''
}

export const FetchReducer=(state={},action)=>{
    switch(action.type){
        case 'LOADING':
            return{
                loading:true,
                users:[],
                error:''
            }
        case "SUCCESS":
            return{
                loading:false,
                users:action.payload,
                error:''
            }
        case 'ERROR':
            return{
                loading:false,
                users:[],
                error:action.payload,
            }
        default :
          return state
    }
}

const requestLoading=()=>({
    type:'LOADING'
})
const requestSuccess=(success)=>(
    {
        type:"SUCCESS",
        payload:success
    }
)
const requestError=(error)=>(
    {
        type:"SUCCESS",
        payload:error
    }
)
export const FetchUsers=()=>{
    return function(dispatch){
        dispatch(requestLoading())
      let z=axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{dispatch(requestSuccess(response.data))
        z.catch(error=>{dispatch(requestError(error))})
        })

    }
}