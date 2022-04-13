const reducer=(state,action)=>{
    switch(action.type){
        case 'Increment':
            return state+action.payload;
        case 'Decrement':
            return state-1;
        case 'Reset':
            return 0;
        default:
            return state
    }
}


export default reducer;