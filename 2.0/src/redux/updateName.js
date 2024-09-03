import React from "react";

import { UPDATENAME } from "./constants";

const Update_Name =(upName)=>
{

    return{
         type: UPDATENAME,
         payload:upName
}
}
export default Update_Name;