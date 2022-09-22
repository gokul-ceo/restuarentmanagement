import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Billheader } from "./billingheader";

function Header(){
    return <>
     <div className="container-sm bg-primary d-flex  text-center">
      <span><Billheader/></span>
       <span style={{textAlign:'center'}}>📜Billing</span>
     </div>
    </>
}
export default Header;