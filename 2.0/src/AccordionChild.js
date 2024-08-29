import React,{Component} from "react";

class AccordChild extends Component{

    state={
        plus:false
    }

    handlePlus=()=>
    {
        this.setState({plus:!this.state.plus})
    }
    render()
    {
        return(
            <div>
                    <h3>{this.props.qsn}</h3>
                    <button  className={`btn ${this.state.plus?  'btn-danger':' btn-primary'}`} style={{borderRadius:50}} onClick={this.handlePlus}>
                        {this.state.plus? '-':'+'}</button>

                        
                   {this.state.plus && <div>{this.props.ans}</div>} 
                
                </div>
        )
    }
}
export default AccordChild