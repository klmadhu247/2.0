import React, {useState,useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";

function Crud()
{
   const [work,setWork] = useState([] )

  const [input,setInput] = useState('')


  const fetchData =  async()=>
  {
    // const response = await fetch('http://localhost:3000/todoList/');
    // const data = await response.json();

    const response = await axios.get('http://localhost:3000/todoList/');
    const data = response.data;

    setWork(data)

  }

  useEffect(()=>{ fetchData()

  },[])

  

 
  const handleChange=(e)=>
  {
    setInput(e.target.value)

  }

//   const handleAdd =()=>
//   {
//     setWork([...work,{id:uuidv4(),task:input}])
//     setInput('')
// }

 const handleAdd = async()=>
 {
    await axios.post('http://localhost:3000/todoList/',{"id":uuidv4(),"task":input})
    fetchData();
    setInput('')
 }

//   const handleDelete=(wrkId)=>
//   {
//     setWork(work.filter(wr=>wr.id!==wrkId))

//   }
const handleDelete=async(wrkId)=>
{
    await axios.delete(`http://localhost:3000/todoList/${wrkId}`);
    fetchData();


}

const handleUpdate= async(Index_From_Work) =>
{
    const updatedTask = prompt('Update your Task',work[Index_From_Work].task);

    await axios.put(`http://localhost:3000/todoList/${work[Index_From_Work].id}`,{id:work[Index_From_Work].id,task:updatedTask})

    fetchData();
}


    return(
        <div>
            <h1 style={{textAlign:'center',color:'orange'}}>CRUD</h1><br/>

            <label>Task</label>
            <input className="form-control" onChange={handleChange} type="text" value={input}/>
<button onClick={handleAdd}>Add Task</button>
            {work.map((wrk,index)=><div><p>{wrk.id} . {wrk.task}</p>
                <button onClick={()=>handleDelete(wrk.id)} className="btn btn-danger">X</button>
                <button onClick={()=>handleUpdate(index)}>Update</button>

                
            </div>  )}
        </div>
    )
}
export default Crud;