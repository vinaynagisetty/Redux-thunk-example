import { useDispatch, useSelector } from "react-redux";

function App(){
  let data=useSelector(
    (state)=>state
  )
  console.log(data);

 let dispatch= useDispatch();
 async function fetchData(dispatch,getState){
  let data= await fetch('https://jsonplaceholder.typicode.com/todos/1')
  let res=await data.json();
  // console.log(res)
  dispatch({type:"Add",payload:res})
  
   }
  return (
    <>


    <h1>App component</h1>
    <p>ID:{data.userDetails?.id}</p>
    <p>userId:{data.userDetails?.userId}</p>
    <p>title:{data.userDetails?.title}</p>
    <button className="btn btn-primary" onClick={
      ()=>{
        dispatch(fetchData)
      }
    }>Add</button>
    </>
  )
}
export default App;