import React, {useState,useEffect} from "react";
import AsynchAwait from "./Fetching_Using_AsynchAwait";

function AsyncAwaitFetch ()
{

    const [works,setWorks] = useState([])

    const FetchData = async ()=>
    {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json();
        
            setWorks(data.slice(0,10))


    }

    useEffect(()=>{

        FetchData();
    },[])

    return(
        <div>
            Asynch await <br/>

            ************************
            ************************
            {works.map(wr=><p>{wr.id}</p>)}
            
        </div>
    )
}

export default AsyncAwaitFetch;