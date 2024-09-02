import React, {useState,useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';

function Crud()
{
   const [work,setWork] = useState([
    { "id": 1, "task": "TO Read" },
    { "id": 2, "task": "TO Write" },
    { "id": 3, "task": "TO Code" },
    { "id": 4, "task": "TO Exercise" },
    { "id": 5, "task": "TO Review" }
  ]
  )

  const [input,setInput] = useState('')

  

 
  const handleChange=(e)=>
  {
    setInput(e.target.value)

  }
  const handleAdd =()=>
  {
    setWork([...work,{id:uuidv4(),task:input}])
    setInput('')


  }

  const handleDelete=(wrkId)=>
  {
    setWork(work.filter(wr=>wr.id!==wrkId))

  }


    return(
        <div>
            <h1 style={{textAlign:'center',color:'orange'}}>CRUD</h1><br/>

            <label>Task</label>
            <input className="form-control" onChange={handleChange} type="text" value={input}/>
<button onClick={handleAdd}>Add Task</button>
            {work.map(wrk=><div><p>{wrk.id} . {wrk.task}</p>
                <button onClick={()=>handleDelete(wrk.id)} className="btn btn-danger">X</button>
            </div>  )}
        </div>
    )
}
export default Crud;