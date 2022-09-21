import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './billing.css';
const style={
    display:{
        height:'50vh',
        width:'95%',
        marginBottom:'1.5rem',  
        zIndex:'0'
    },
    itemdisply:{

    },
    detailsdefault:{
        height:'2rem',
        borderRadius:'10px'
    },
    details:{
        height:'2rem',
        borderRadius:'10px',
        border:'1px solid grey',
        marginBottom:'5px'
        
    },
    item:{
        marginTop:'5px'
    },
    overflowcontainer:{
        height:'45vh',
    },
    warning:{
        textAlign:'center',
        fontWeight:'bolder'
    },
    close:{
        height:'16px',
        width:'16px',
        marginTop:'6px'
    }


}
export function printjob(array){
    console.log("print this array: ",array);
}
export function BillitemDisplay(props){
    const menu = [{Name:'',Price:''},{Name:'Idly',Price:'8'},{Name:'Dosa',Price:'50'},{Name:'Pongal',Price:'30'},{Name:'Poori',Price:'20'}]
    const Todisplay = props.value
     const defaultitle = <div style={style.detailsdefault} className="container d-flex justify-content-between itemdetails "> 
          <h6>SI.NO</h6>
          <h6>Item</h6>
          <h6>Quantity</h6>
          <h6>Price</h6>
          <h6>Total</h6>
       </div>
    // function handledivclick(){
    //     setclicked(true)
    // }
    // function handleclose(){
    //     console.log('I have been clicked!!');
    //     // console.log('Here is the item passed :',item);
    // }
    // const[clicked,setclicked] = useState(false)
    const[isempty,setempty] = useState(false)
    useEffect(()=>{
        Todisplay.length<=0?setempty(true):setempty(false)
    },[Todisplay])
    function sticktitle(){
        console.log("I am ready to stick");
    }

    return <>
    
    <div style={style.display} ons className=" billitemdisplay container-sm ">
    {/* <div style={style.detailsdefault} className="container d-flex justify-content-between itemdetails "> 
          <h6>SI.NO</h6>
          <h6>Item</h6>
          <h6>Quantity</h6>
          <h6>Price</h6>
          <h6>Total</h6>
       </div> */}
       <div style={style.overflowcontainer}  className="container  overflow-auto">
       {defaultitle}
        {!isempty?Todisplay.map((item)=>
        <div style={style.details} className="container d-flex justify-content-between itemdetails "> 
        <h6 style={style.item}>1.</h6>
        <h6 style={style.item}>{menu[item[0]].Name}</h6>
        <h6 style={style.item}>{item[1]}</h6>
        <h6 style={style.item}>{menu[item[0]].Price}</h6>
        <h6 style={style.item}>₹64</h6>
       
        {/* <img src="close.png" alt="close_image" /> */}
        {/* {clicked?<img style={style.close}  onClick={handleclose()} src="close.png" alt="close_image" />:null} */}
        </div>
       ):<div style={style.warning} className="warningdiv"><span>⛔No Bill to display⛔</span></div>}
       
       </div>
    </div>
    </>
}
// export default BillitemDisplay;