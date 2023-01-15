import { useSelect } from "@mui/base";
import React, { Fragment, useEffect, useState } from "react";
import socket from "../context/socket";
var currentorder = []
function ORderdiv(props){
    const[orderid,setorderid] = useState('')
    const[orderitemlist,setorderitemlist]=useState([])
    console.log("Order id recivedd by orderdiv: ",props.orderid);
    function handleorder(){
        fetch(`http://localhost:4000/orderdetails/${props.orderid}`,{
            method:'GET',
            headers:{
                'Accept':'application/json'
            }
        }).then((response)=>response.json())
        .then((json)=>{
            // setMenulist(json);
             console.log(`ORder details of orderid-${props.orderid}:`,json);
             setorderid(json[0].Orderid)
             setorderitemlist(json)
            
        })
    }
    useEffect(()=>{
        fetch(`http://localhost:4000/orderdetails/${props.orderid}`,{
            method:'GET',
            headers:{
                'Accept':'application/json'
            }
        }).then((response)=>response.json())
        .then((json)=>{
            // setMenulist(json);
             console.log(`ORder details of orderid-${props.orderid}:`,json);
             setorderid(json[0].Orderid)
             setorderitemlist(json)
            
        })
    },[props.orderid])

    return <Fragment>
        <div style={{'border':'3px solid #FF616D','width':'97%','borderRadius':'5px'}} className="container shadow p-3 mb-5 ">
            <div>
            <div className="d-flex justify-content-between">
            <h4>Table no:2</h4>
            <button onClick={handleorder} style={{'border':'none','backgroundColor':'#FF616D','borderRadius':'5px','color':'white','fontWeight':'bold'}}>Get order!</button>
            </div>
            <h6 >Orders-id - {orderid}</h6>
            </div>
           
            <ol class="list-group my-1 list-group-numbered">
            {orderitemlist?.map((item)=>{
                return <>
                <li class="list-item">{item.Name}-{item.Quantity}</li>
                </>
            })} 
            </ol>
            {/* 
                <li class="list-group-item">A list item</li>
                <li class="list-group-item">A list item</li>
                <li class="list-group-item">A list item</li>
             */}
        </div>
    </Fragment>
}

export default ORderdiv;