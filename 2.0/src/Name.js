import React, {Component} from "react";

class Name extends Component{
    render()
    {
        return(
            <div>
                <h2>Name: {this.props.nam}   
                     </h2>  <h2>age: {this.props.age}</h2>
            <h2>Name: {this.props.n1}
            </h2>
            </div>
        )
    }
}
export default Name;