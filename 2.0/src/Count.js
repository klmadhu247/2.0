import React,{Component} from "react";

class Count extends Component{
    state = {
        Count:0
    };

    handleButton=()=>
    {
        this.setState({Count:this.state.Count+1})
    }
    render()
    {
        return(
            <div>The count is: {this.state.Count}
            <button onClick={this.handleButton}>Increase</button> </div>
        )
    }
}

export default Count;