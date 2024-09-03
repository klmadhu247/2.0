import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import redu from "./redux/reducer1";
import './Style.css';
import RedChild from "./redChild";
import ReduxChild2 from "./ReduxChild2";


function App()
{
  const store = createStore(redu);

  return(
    <Provider store={store}>

<div>
    <h1 style={{color:'orange',textAlign:'center'}}>APP</h1>  
    <div className="borderline"></div>
    <RedChild/>

    <ReduxChild2/>


    </div>

    </Provider>
    
  )
}
export default App;