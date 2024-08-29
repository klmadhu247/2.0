import React, {Component} from "react";
import dayjs from "dayjs";

class Toggle extends Component{
    state = {
        Movie:'',
        ReleaseDate:'',
        submit:false,
        showAge:false
    }

    handleChange=(e)=>
    {
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit=()=>
    {
        this.setState({submit:true})
    }

    handleAgeButton=()=>
    {
        this.setState({showAge:!this.state.showAge})
        
    }
    handleHOme=()=>
    {
        this.setState({submit:!this.state.submit})
    }
    render()
    {
        return(
          <div>  <h1 style={{textAlign:"center"}}>MOvie Buzz</h1>
         {!this.state.submit &&<div><form className="form-group col-6">
            <label>Movie Name: </label>
         <input className="form-control " type="text" onChange={this.handleChange} name="Movie"></input>
         
         <label>Release Date: </label>
         <input className="form-control " type="date" name="ReleaseDate" onChange={this.handleChange}></input></form> 
          <button className="btn btn-primary mt-2" onClick={this.handleSubmit}>Submit</button>
          </div>}<br/>
       { this.state.submit &&  <div> <b>Movie Name:  </b> {this.state.Movie} <br/>
         <button className="btn btn-success" onClick={this.handleAgeButton}>{this.state.showAge? 'Hide Date':'Show Release Date'}</button>
       { this.state.showAge && <div><label>The Release Date for {this.state.Movie} is : </label>{dayjs(this.state.ReleaseDate).format('DD/MMM') }
       </div> }
       <button className="btn btn-danger" onClick={this.handleHOme}>HOme</button>
       </div> }
          
          </div> 
        )
    }
}
export default Toggle;