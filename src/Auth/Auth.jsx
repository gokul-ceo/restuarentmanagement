import React from "react";
import {Navigate} from 'react-router-dom';

  
const PrivateRoute  = ({children})=>{
    var name = localStorage.getItem("Name");
    return name? children :  <Navigate to="/login"/>;
}

export default PrivateRoute;