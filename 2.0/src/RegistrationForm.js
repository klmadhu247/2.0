import React, {Component} from "react";
import './Regis.css'
import 'bootstrap/dist/css/bootstrap.min.css';


class RegistrationForm extends Component{
    render()
    {
        return(
            <div>
                <h1>Registration Form</h1>
                <div className="d-flex col-12 justify-content-between" style={{ width: "60%", margin: "0 auto" }}> 

                <form className="form-group d-flex flex-column col-5">
                    <label>First Name: </label>
                    <input className="form-control" type="text"></input>
                </form>

                <form className="form-group d-flex flex-column col-5">
                    
                    <label>Last Name: </label>
                    <input className="form-control" type="text"></input>

                </form>
                </div>
            </div>

        )
    }
}
export default RegistrationForm;