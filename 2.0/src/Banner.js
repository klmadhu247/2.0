import React,{Component} from "react";
import './sty.css'

class Banner extends Component{

   
    render()
    {
        return(
            <div>
                Banner:  <b>{this.props.film}</b>  and BOxOffice collection is: <b>{this.props.bo}</b>
                <button onClick={this.props.handleinc}>Button From Banner</button><br></br>

                <button onClick={this.props.handDec}>Dec Button From Banner</button>
            </div>
        )
    }
}
export default Banner;