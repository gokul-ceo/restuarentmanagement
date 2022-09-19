import React from "react";
import './billing.css';
const style={
    display:{
        height:'50vh',
        marginTop:'1.5rem',
        width:'95%',
        marginBottom:'1.5rem'
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
        backgroundColor:'grey',
        marginBottom:'5px'
        
    },
    item:{
        marginTop:'5px'
    }

}
function BillitemDisplay(props){
    console.log(props.value);
    const Todisplay = props.value
    return <>
    <div style={style.display} className=" billitemdisplay container-sm ">
    <div style={style.detailsdefault} className="container d-flex justify-content-between itemdetails "> 
          <h6>SI.NO</h6>
          <h6>Item</h6>
          <h6>Quantity</h6>
          <h6>Price</h6>
          <h6>Total</h6>
       </div>
       {Todisplay.map((item)=>
        <div style={style.details} className="container d-flex justify-content-between itemdetails "> 
        <h6 style={style.item}>1.</h6>
        <h6 style={style.item}>{item[0]}</h6>
        <h6 style={style.item}>{item[1]}</h6>
        <h6 style={style.item}>8</h6>
        <h6 style={style.item}>₹64</h6>
        </div>
       )}
      
    </div>
    </>
}
export default BillitemDisplay;