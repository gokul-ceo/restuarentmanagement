import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const style ={
    display:{
        width:'345px',
        height:'8vh',
        borderRadius:'10px',
        border:'1px solid grey',
        marginLeft:'0'

    }
}
function Billingdisplay(props){
    console.log('value:',props.value);
    const menu = [{name:'Idly',price:8},{name:'Dosa',price:20},{name:'Pongal',price:30}] 
    const [exist,setexist] = useState(false);
    
    return <>
    <div style={style.display} className="billingdisplay mx-2">
    {props.value===undefined ? <span>Enter Item No: </span> : props.value > menu.length && props.value === '00'?<span>Item {props.value} does not exist</span> : <span>Enter No of {menu[props.value].name} : </span>
    }
    
    </div>
    </>
        
    }
    

export default Billingdisplay;