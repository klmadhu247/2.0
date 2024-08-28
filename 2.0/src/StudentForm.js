import React,{Component} from "react";

class StudentForm extends Component
{

    state = {
        fname:'',
        lname:'',
        submit:false
    }



    // handleFname=(e)=>
    // {
    //     this.setState({fname:e.target.value})
    // }

    // handleLname=(e)=>
    // {
    //     this.setState({lname:e.target.value})
    // }

    handleChange =(e)=>
    {
        this.setState({[e.target.name]:e.target.value})

    }
    handleSubmit=()=>
    {
        this.setState({submit:true})
    }

    render()
    {
        return(
            <div>

                <h1>Student Form</h1>

                <label>First Name: </label>
                
                <input type='text' name="fname" value={this.state.fname} onChange={this.handleChange}></input> <br></br>
            

                <label>Last Name:   </label>
                <input type='text' name="lname" value={this.state.lname} onChange={this.handleChange}></input><br/>
                <button onClick={this.handleSubmit}>Submit</button>

               {this.state.submit &&  <div>Name: {this.state.fname} {this.state.lname}</div> }

            </div>
        )
    }
}
export default StudentForm;