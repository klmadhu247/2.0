import React from "react";
import { connect } from "react-redux";
import decrementCount from "./decrement";

function ReduxChild2 (props)
{
    return(
        <div>
            Redux Child 2
            <div>COunt from Child 2: {props.count}</div>

            <button onClick={props.decre}>DECREMENT</button>


        </div>
    )
}

const mapstateToProps = (state)=>
{
    return{
        count:state.count
    }
}

const mapDispatechToProps = (dispatch)=>
{
    return{
         decre: ()=> dispatch(decrementCount())
    }
}

export default connect(mapstateToProps,mapDispatechToProps) (ReduxChild2);