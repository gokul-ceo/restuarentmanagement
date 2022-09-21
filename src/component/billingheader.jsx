import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './billing.css';
import BillAside from "./BillAside";
import { Hamburger } from "./Icons";
export function Billheader(){
    const[open,setopen] = useState(false)
    function openside(){
         setopen(!open)
    }
    return <>
    <div className="container-sm"> 
   <Hamburger value={openside}/>
    </div>
   {open&&<BillAside/>}
    
    </>
}