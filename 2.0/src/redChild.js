import React, { useState } from "react";
import { connect } from "react-redux";
import incrementCount from "./increment";
import Update_Name from "./redux/updateName";

function RedChild(props){

    const [input,setInput] = useState('')

    const handleName = (e)=>
    {
       setInput(e.target.value)

        
    }

    const handleAdd =()=>
    {

       props.updaName(input)
        
    }


    return(
        <div>The Name from the Reducer: 
            <span style={{color:'red',marginLeft:'5px'}}>{props.Peru}</span> 
          <br/> The Count Is:  {props.count}<br/>
            <button onClick={props.incre}>Increment</button><br/>

            <input type="text" onChange={handleName}/> <button onClick={handleAdd}>UPName</button>

            {input}
        </div>

    )
}

const mapStateToProps = (state)=>
{
    return{

    
    Peru: state.Name,
    count:state.count
    }
}

const mapDispatechToProps = (dispatch)=>
{
return{
    incre: ()=> dispatch(incrementCount()),
    updaName: (upName)=> dispatch(Update_Name(upName))
}
}
export default connect(mapStateToProps,mapDispatechToProps)(RedChild)