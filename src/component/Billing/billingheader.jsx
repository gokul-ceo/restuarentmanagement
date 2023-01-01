import React, { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import BillAside from "./BillAside";
import { rerender_inspector } from "../../Render_inspector";
import { CloseBtn, Hamburger } from "./Icons";
export function Billheader(){
    const[count,setcount] = useState(1)
    useEffect(()=>{
        setcount(count + 1)
        rerender_inspector('billingheader.jsx',count)
    },[])
    const[open,setopen] = useState(false)
    function openside(){
         setopen(true)
    }
    function closeside(){
        setopen(false)
    }
    return <React.Fragment>
    <div className="container-sm"> 
   {open?<CloseBtn value={closeside} />:<Hamburger value={openside}/>}
    </div>
   {open&&<BillAside/>}
    
    </React.Fragment>
}