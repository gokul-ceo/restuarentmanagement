import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './billing.css';
import BillAside from "./BillAside";
import { CloseBtn, Hamburger } from "./Icons";
export function Billheader(){
    const[open,setopen] = useState(false)
    function openside(){
         setopen(true)
    }
    function closeside(){
        setopen(false)
    }
    return <>
    <div className="container-sm"> 
   {open?<CloseBtn value={closeside} />:<Hamburger value={openside}/>}
    </div>
   {open&&<BillAside/>}
    
    </>
}