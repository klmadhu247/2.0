import React,{Component} from "react";

class Virat extends Component{

    state={
        age:35,
        favFood:'Vegan Foods'
    }
    render()
    {
        return(
            <div>
                <h1>Virats Age is: {this.state.age}
                    and his Fav Food is: {this.state.favFood}
                </h1>

            </div>
        )
    }
}
export default Virat;