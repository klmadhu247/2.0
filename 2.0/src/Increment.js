import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


class IncrementBy5 extends Component{

    state = {
        inputVal:0,
        const:5,
        outputVal:0

    }

    handleInput=(e)=>
    {
        this.setState({inputVal:e.target.value})
    }

    handleIncre=()=>
    {
        this.setState({outputVal:parseInt(this.state.inputVal)+parseInt(this.state.const)})
    }
    render()
    {
        return(
            <div>
               <h1> Increment By 5</h1><br/>
               <div className="container col-3 justify-content-center">
               <input className="form-control " type="number" onChange={this.handleInput}></input><br/>
               <button className="btn btn-primary" onClick={this.handleIncre}>Increase by 5</button>
               <br/>
              <b style={{color:'red'}}>{this.state.outputVal}</b> 
               </div> 
               </div>
        )
    }
}
export default IncrementBy5;