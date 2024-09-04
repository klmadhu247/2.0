import React, { useState } from "react";
import { connect } from "react-redux";
import Yetru from "./Yetru";
import Irakkavum from "./Irakku";
import Peyarmatru from "./PeyarMatru";


function ChildRed(props){

    const [input,setInput] = useState('')

    const handleChange=(e)=>
    {
        setInput(e.target.value)
    }

    const handleClick=()=>
    {
        props.peyMat(input)

    }

    const handleYetru=()=>
    {
        props.Yet();

    }
    const handleIrakku=()=>
    {
        props.ira();

    }

    return(
    <div>
        Reducer Child

        Name: {props.Name}<br/>
        Count: {props.Count}<br/>

        <button onClick={handleYetru}>Yetru</button>
        <button onClick={handleIrakku}>Irakku</button><br/>
        <input type="text" onChange={handleChange}/>
        <button onClick={handleClick}>Maatru</button>


    </div>
    )
}

const mapStateToProps =(state)=>
{
    return{
        Name:state.Name,
        Count:state.Count
    }
}

const mapDispatchToProps =(dispatch)=>
{
    return{
        Yet: ()=>dispatch(Yetru()),
        ira: ()=> dispatch(Irakkavum()),
        peyMat: (uName)=> dispatch(Peyarmatru(uName))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ChildRed)