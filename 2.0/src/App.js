import React, {Component} from 'react';
import Virat from './Virat';
import Count from './Count';
import Name from './Name';
import Banner from './Banner';
import Film from './Film';
import Voting from './voting';
import StudentForm from './StudentForm'

class App extends Component
{
  state = {
    Nm:'KLM & Co',
    count:200
  }

  handleINcrement =()=>
  {
    this.setState({count:this.state.count+1})
  }

  handleDecrement = ()=>
  {
    this.setState({count:this.state.count-1})
  }
  render()
  {
    return(
     
    <div>
      **********************************************
    ************************************************
    ************************************************
    <Voting crs='C' />
    <Voting crs='C++' />
    <Voting crs='PYT' />

    <StudentForm/>
    <Virat/>
    <Count/>
    <Name nam={this.state.Nm} n1='KLM' age={22} />
    <Banner film='NKP'  bo={this.state.count} handDec={this.handleDecrement}/>
    <Banner film='Vidamuyarchi' bo={this.state.count} handleinc={this.handleINcrement}/>
    <button onClick={this.handleINcrement}>Increment</button>

    <Film filmName='GBU'/>
    <Film filmName='Vidamuyarchi'/>
    
    </div>
    )
  }
}

export default App