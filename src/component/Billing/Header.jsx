import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Billheader } from "./billingheader";
import { useState,useEffect } from "react";
import { rerender_inspector } from "../../Render_inspector";
function Header(){
  const[countrender,setcountrender] = useState(1)
  useEffect(()=>{
      setcountrender(countrender + 1)
      rerender_inspector('Header.jsx',countrender)
  },[])
    return <React.Fragment>
     <div className="container-sm bg-primary d-flex  text-center">
      <span><Billheader/></span>
       <span style={{textAlign:'center'}}>📜Billing</span>
     </div>
    </React.Fragment>
}
export default Header;