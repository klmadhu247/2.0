import React,{Component} from "react";
import data from './data'
import AccordChild from "./AccordionChild";

class Accordion extends Component{
    state = {
        booklet:data,
        
    }

    handlePlus=()=>
    {
        this.setState({plus:!this.state.plus})

    }
    render()
    {
        return(
            <div className="container">
                <h1>Accordion</h1><br/>
                {this.state.booklet.map(bk=>
                <AccordChild qsn={bk.question} ans={bk.answer}/>

                )}


            </div>
        )
    }
}
export default Accordion