import React from "react";
import './Style.css';
import { Provider } from "react-redux";
import { createStore } from "redux";
import Reducc from "./redux/Red";
import ChildRed from './CHild_Red'


function App()
{

  const store = createStore(Reducc)
  

  return(
    <Provider store={store}>
      <div>APP
        <ChildRed/>

      </div>
  
</Provider>

  )
}
export default App;