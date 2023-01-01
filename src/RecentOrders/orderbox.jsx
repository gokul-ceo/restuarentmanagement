import { useSelect } from "@mui/base";
import React, { Fragment, useEffect, useState } from "react";
import socket from "../context/socket";
var currentorder = []
function ORderdiv(props){
    const[orderid,setorderid] = useState('')
    console.log("Order id recivedd by orderdiv: ",props.orderid);
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
        
    })
    return <Fragment>
        <div className="container-sm shadow p-3 mb-5  bg-warning rounded">
            <h4>Table no:2</h4>
            <h6>Orders-id - {orderid}</h6>
            <ol class="list-group list-group-numbered">
                <li class="list-group-item">A list item</li>
                <li class="list-group-item">A list item</li>
                <li class="list-group-item">A list item</li>
            </ol>
        </div>
    </Fragment>
}

export default ORderdiv;