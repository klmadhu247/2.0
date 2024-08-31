import React from "react";
import Tour from './tour'
import AsynchAwait from "./Fetching_Using_AsynchAwait";
import AsyncAwaitFetch from "./AsyncAwait";

function App(){
  return(
    <div>
      {/* <Menu/> */}
      {/* <FetchJson/> */}
      {/* <Tour/> */}
      <AsynchAwait/>
      <AsyncAwaitFetch/>
    </div>
  )
}
export default App;