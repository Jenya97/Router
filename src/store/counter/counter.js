 export const countInitial=0

 export const count=(state=0,action)=>{
    switch(action.type){
        case 'Increment':
            return state+1;
        case 'Decrement':
            return state-1;
        case 'Reset':
            return 0;
        default:
            return state
    }
 }

export function increment(){
    return {
        type:'Increment'
           }
 }
export function decrement(){
    return {
        type:'Decrement'
           }
 }
export function reset(){
    return {
        type:'Reset'
           }
 }