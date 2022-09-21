import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './billing.css';

const style = {
    aside:{
        width:'40vh',
        height:'100%',
        marginLeft:"0",
        position:'absolute',
        top:'3rem',
        left:'0px',
        zIndex:'1',
        
    }
}
export function Billheader(){
    const[open,setopen] = useState(false)
    function openside(){
         setopen(!open)
    }
    return <>
    <div className="container-sm"> 
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" onClick={openside} class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
    </div>
   {open&&<div style={style.aside}  className="container-sm bg-success">
        Testing div 
    </div>}
    
    </>
}