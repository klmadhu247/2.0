import React,{useState,useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";


function Axios(){

    const [workList,setWOrkList] = useState([])

    const [inputTask,setInputTask] = useState('')

    const renderData= async()=>{
     const response =    await axios.get('http://localhost:3001/todoList')
     
     const data =await  response.data;

     setWOrkList(data)
    

    }

    useEffect(()=>{
        renderData();
    },[])

    const handInput=(e)=>
    {
        setInputTask(e.target.value)

    }

    const handAdd= async ()=>
    {
        await axios.post('http://localhost:3001/todoList',{id:uuidv4(),task:inputTask})
   renderData();
    }

    const handDel= async (idwrk)=>
    {
        await axios.delete(`http://localhost:3001/todoList/${idwrk}`);
        renderData();
    }
    const handUp= async(wId)=>
    {

        const updatedTask = prompt('Update Your Task');
        await axios.put(`http://localhost:3001/todoList/${wId}`,{id:wId,task:updatedTask})
        renderData();

    }




    return(
        <div>
          <h1> CRUD BY AXIOS</h1> 
          <input type="text" onChange={handInput}/>
          <button onClick={handAdd}>Add Task</button>

          {workList.map(wl=><div>{wl.task} 
            <button onClick={()=> handDel(wl.id)}>X</button> 
            <button onClick={()=> handUp(wl.id)}>Update</button>
          </div>)}

        </div>
    )
}
export default Axios;