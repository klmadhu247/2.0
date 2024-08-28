import React,{Component} from "react";
class Film extends Component{
    state={
        collection:1000
    }
    collectionButton=()=>
    {
        this.setState({collection:this.state.collection+10})
    }
    render()
    {
        return(
            <div>
                *********************************
                <br/>Film Name: {this.props.filmName} <br></br>
                Collection: {this.state.collection}<br/>

                <button onClick={this.collectionButton}>Collection Increment</button>

            </div>
        )
    }
}
export default Film;