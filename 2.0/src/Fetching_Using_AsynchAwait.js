import React,{useState,useEffect} from "react";

function AsynchAwait()
{

    const [todos,setTodos] = useState([])

{/* https://jsonplaceholder.typicode.com/todos */}

const dataFetched = async() =>
    {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        setTodos(data.slice(0,10))
       
    }
    useEffect(()=>
        {
            dataFetched();

    },[])
          

    return(
        <div>
            <h1>Fetching Using Asynch Await</h1> 

        {todos.map(td=><div>{td.title}</div>)}
        
        </div>
    )
}
export default AsynchAwait;