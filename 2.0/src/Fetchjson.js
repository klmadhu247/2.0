import React ,{useState,useEffect} from "react";

function FetchJson()
{

    const [todos,setTodos] = useState([])

    const fetchData=() => fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response=> response.json())
    .then(data=>setTodos(data.slice(0,10)))
    useEffect(()=> {

        fetchData();
        
    }  ,[])

    
    
    const handleDelete=(idd)=>
    {

        
         let filteredTodo = todos.filter(td=>td.id!==idd)

      setTodos(filteredTodo)

    }

    const handleRefresh=()=>
    {

        fetchData();
        
    }
    
    
    
    
    return(
        <div>

            Fetch Json
            
            {todos.map(rTodo=><div>{rTodo.title}
                <button className="btn btn-success" onClick={()=>handleDelete(rTodo.id)}>Delete</button></div>)}

                {  (todos.length==0) &&<button className="btn btn-primary " onClick={handleRefresh}> Refresh</button>}



        </div>
    )
}
export default FetchJson;