import React from "react";
import { connect } from "react-redux";
function ReduxChild(props)
{
    return(
        <div>Redux Child
            {props.Count}
        </div>
    )
}

const  mapStateToProps = (state)=>
{
    return{
        Count: state.Count
    }


}
export default connect(mapStateToProps) (ReduxChild);