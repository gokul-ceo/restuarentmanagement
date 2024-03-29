import React,{useEffect,useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ErrorBoundary} from 'react-error-boundary'
import { rerender_inspector } from "../../Render_inspector";
const style ={
    display:{
        width:'350px',
        height:'8vh',
        borderRadius:'10px',
        border:'1px solid grey',
        display:'block',
        zIndex:'0'

    }
}
function ErrorHandler({error}){
    return (
        <div role="alert">
          <p>An error occurred:</p>
          <pre>{error.message}</pre>
        </div>
      )
}


function Billingdisplay(props){
    const[count,setcount] = useState(1)
    useEffect(()=>{
        setcount(count + 1)
        rerender_inspector('Billingdisplay.jsx',count)
    },[])
    // console.log('value:',props.value);
    console.log(props.value);
    // const menu = [{name:'Idly',price:8},{name:'Dosa',price:20},{name:'Pongal',price:30},{name:'Idly',price:8},{name:'Dosa',price:20},{name:'Pongal',price:30},{name:'Idly',price:8},{name:'Dosa',price:20},{name:'Pongal',price:30},{name:'Idly',price:8},{name:'Dosa',price:20},{name:'Pongal',price:30},{name:'Idly',price:8},{name:'Dosa',price:20},{name:'Pongal',price:30},{name:'Idly',price:8},{name:'Dosa',price:20},{name:'Pongal',price:30},{name:'Idly',price:8},{name:'Dosa',price:20},{name:'Pongal',price:30},{name:'Idly',price:8},{name:'Dosa',price:20},{name:'Pongal',price:30},{name:'Idly',price:8},{name:'Dosa',price:20},{name:'Pongal',price:30},{name:'Idly',price:8},{name:'Dosa',price:20},{name:'Pongal',price:30},{name:'Idly',price:8},{name:'Dosa',price:20},{name:'Pongal',price:30},{name:'Idly',price:8},{name:'Dosa',price:20},{name:'Pongal',price:30},{name:'Idly',price:8},{name:'Dosa',price:20},{name:'Pongal',price:30},{name:'Idly',price:8},{name:'Dosa',price:20},{name:'Pongal',price:30},{name:'Idly',price:8},{name:'Dosa',price:20},{name:'Pongal',price:30},{name:'Idly',price:8},{name:'Dosa',price:20},{name:'Pongal',price:30},{name:'Idly',price:8},{name:'Dosa',price:20},{name:'Pongal',price:30},{name:'Idly',price:8},{name:'Dosa',price:20},{name:'Pongal',price:30},{name:'Idly',price:8},{name:'Dosa',price:20},{name:'Pongal',price:30},{name:'Idly',price:8},{name:'Dosa',price:20},{name:'Pongal',price:30},]
    if(props.item!==undefined) return <React.Fragment>
    <ErrorBoundary FallbackComponent={ErrorHandler}>
    <div style={style.display} className="billingdisplay mx-2">
    <span>Item: {props.item}</span>
    <p>Quantity: {props.quantity}</p>
    </div>
    </ErrorBoundary>
    </React.Fragment>
        
    }
    

export default Billingdisplay;