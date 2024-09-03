import React from "react";
import { connect } from "react-redux";
import incrementCount from "./increment";

function RedChild(props){
    return(
        <div>The Name from the Reducer: 
            <span style={{color:'red',marginLeft:'5px'}}>{props.Peru}</span> 
          <br/> The Count Is:  {props.count}<br/>
            <button onClick={props.incre}>Increment</button>
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
    incre: ()=> dispatch(incrementCount())
}
}
export default connect(mapStateToProps,mapDispatechToProps)(RedChild)