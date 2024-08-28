import React,{Component} from "react";

class Voting extends Component{

    state={
        votingValue:0
    }
    votingButton=()=>
    {
        this.setState({votingValue:this.state.votingValue+1})
    }
    render()
    {
        return(
            <div>
               {this.props.crs}   <button onClick={this.votingButton}>Vote</button> {this.state.votingValue}

            </div>
        )
    }
}
export default Voting;