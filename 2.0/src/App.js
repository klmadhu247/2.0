import React, {Component} from 'react';
import RegistrationForm from './RegistrationForm';
import Json from './Json';   
import Toggle from './Toggle';
import IncrementBy5 from './Increment';
import Accordion from './Accordion';


class App extends Component
{
  
  render()
  {
    return(
     
    <div>
     <IncrementBy5/>
     <Accordion/>
    </div>
    )
  }
}

export default App