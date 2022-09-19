import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Billingdisplay from "./Billingdisplay";
import BillitemDisplay from "./BillItemDisplay";
import './billing.css';

const style={
    keyboard:{
        
    },
    button:{
        width:'4rem'
    },
    funckye:{
        width:'4.4rem'
    },
    col:{
        padding:'0'
    }
}
let clickednumbers = []
let ItemNumber;
let Itemquantity;
let singlearr = [];
let totalarr =[];
export function Billingkeyboard(){
    const[itemdisplay,setitemdisplay] = useState([])
    const[itemno,setitem] = useState(0)
    const[quantity,setquantity] = useState(0)
    const[count,setcount] = useState(0)
    const[orderarr,setorderarr] = useState(totalarr)
    function Clickevent(event){
        clickednumbers.push(event.target.value);
    }
    function pushfunction(arreyy){
        totalarr.push(arreyy)
        setorderarr(totalarr)
        setitemdisplay(totalarr)
    }
    function handleenter(){
        setcount(count+1)
        if (!count%2===0) {
            Itemquantity = Number(clickednumbers.join(''))
            console.log('Quantity: ',Itemquantity);
            if(Itemquantity!==0){
                clickednumbers=[]
            // console.log('emptyed clickednumbers_arr');
            setcount(0)
            setquantity(Itemquantity)
            singlearr.push(Itemquantity);
            pushfunction(singlearr);
            singlearr =[]
            }
            

        } else {
            ItemNumber = Number(clickednumbers.join(''))
            console.log('ItemNumber :',ItemNumber);
            if(ItemNumber!==0){
                clickednumbers=[]
                // console.log('emptyed clickednumbers_arr');
                singlearr.push(ItemNumber);
                setitem(ItemNumber)
            }
           
        }
        console.log('Totalarray: ',totalarr);
    }
    function handlecancel(){
        totalarr=[]
        clickednumbers=[]
        singlearr=[]
        setitem(0)
        setquantity(0)
    }
    
    return <>
    <BillitemDisplay value={itemdisplay}/>
    <Billingdisplay value={orderarr} item={itemno} quantity={quantity} />
    <div style={style.keyboard} className="container-sm billingkeyboard text-center fs-1">
    <div className="row m-0 p-0 my-2  ">
            <div className="col">
                <button onClick={Clickevent} style={style.button} value='7' type= 'button' className='btn btn-outline-primary'>7</button>
            </div>
            <div className="col">
                <button onClick={Clickevent} style={style.button} value='8' type= 'button' className='btn btn-outline-primary'>8</button>
            </div>
            <div className="col">
                <button onClick={Clickevent}style={style.button}type= 'button' value='9'  className='btn btn-outline-primary'>9</button>
            </div>
            <div style={style.col} className="col">
                <button onClick={Clickevent} type= 'button'  style={style.funckye} className='btn btn-warning'>Menu</button>
            </div>
         </div>
         <div className="row m-0 p-0 my-2">
            <div id="btn" className="col m-0 ">
                <button   onClick={Clickevent} style={style.button}  type= 'button' value='4' className='btn btn-outline-primary'>4</button>
            </div>
            <div className="col m-0">
                <button  onClick={Clickevent} style={style.button} type= 'button' value='5' className='btn btn-outline-primary'>5</button>
            </div>
            <div className="col m-0">
                <button  onClick={Clickevent}style={style.button} type= 'button' value='6' className='btn btn-outline-primary'>6</button>
            </div>
            <div style={style.col} className="col m-0">
                <button onClick={handlecancel}  type= 'button' style={style.funckye}  className='btn btn-danger'>Cancel</button>
            </div>
         </div>
         <div className="row m-0 p-0my-2 ">
            <div className="col m-0">
                <button  onClick={Clickevent}style={style.button} type= 'button' value='1' className='btn btn-outline-primary'>1</button>
            </div>
            <div className="col m-0">
                <button onClick={Clickevent} style={style.button} type= 'button' value='2' className='btn btn-outline-primary'>2</button>
            </div>
            <div className="col m-0">
                <button onClick={Clickevent}style={style.button}  type= 'button' value='3' className='btn btn-outline-primary'>3</button>
            </div>
            <div style={style.col} className="col m-0">
                <button type= 'button' onClick={Clickevent} style={style.funckye}  className='btn btn-primary'> Print </button>
            </div>
         </div>
         <div className="row m-0 p-0 my-2">
            <div className="col m-0">
                <button  onClick={Clickevent} type= 'button' style={style.button} value='0' className='btn btn-outline-primary'>0</button>
            </div>
            <div className="col m-0">
                <button  type= 'button' value='00' style={style.button} className='btn btn-outline-primary'>00</button>
            </div>
            <div className="col m-0">
                <button   type= 'button' value='.' style={style.button} className='btn btn-outline-primary'>.</button>
            </div>
            <div style={style.col} className="col m-0">
                <button  onClick={handleenter}  type='button'style={style.funckye} className='btn btn-success'>Enter</button>
            </div>
         </div>
         
    </div>
    </>
}
