import {useSelector,useDispatch} from 'react-redux';


function App() {
const userAll=useSelector((state)=>state.fetch)
const dispatch=useDispatch()

  return (
    <>
    
     {userAll.loading && userAll.error==='' ? <h2>loading...</h2> :
     !userAll.loading && userAll.error==='' ?  
     userAll.users.map(i=>(  <h2 key={i.id}>{i.name}</h2>  ) ) : <h2> sxal</h2>}
    </>
  );
}

export default App;
