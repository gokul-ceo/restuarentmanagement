import React, { Fragment, useEffect, useState } from "react";
// import axios from "axios";
import HomeHeader from "../homeasserts/HomeHeader";
import socket from "../context/socket";
import { rerender_inspector } from "../Render_inspector";
import ORderdiv from "./orderbox";
import { useDispatch, useSelector } from "react-redux";
import { updatearray } from "../Redux/global_state/orderarraySlice";
import { Update_recived_order } from "../Redux/global_state/RecivedorderSlice";

//  var current_orders = []
 var Tableno = []
 const orderidlist = []
//  var Orderlist = [] 

 function Currentorder(){
//     async function testing(){
//     const response = await fetch('http://localhost:4000/',{
//         method:'GET'
//     })
//     console.log("Response: ",response);
// }    testing()
    const dispatch = useDispatch()
    const[count,setcount] = useState(0) //used for render inspector do not remove or delete
    // const[orderidlist,setorderidlist]=useState([])
    // const[orderids,setorderids] = useState([])
    const RecievedArray = useSelector((state)=>state.recivedorder.Recived_orders)
    // useEffect(()=>{
    //     console.log("Recived array from the admins :",RecievedArray);
    // },[RecievedArray])
    const[OrderList,setOrderList] = useState([])
    const[tableno,settableno] = useState(0)
    
    // socket.on('recievedorder',(orders)=>{
    //     console.log("REcived order from server: ",orders);
    // });
    // const[orderid,setorderid] = useState(0)
    useEffect(()=>{
        fetch(`http://localhost:4000/recievedorders`,{
            method:'GET',
            headers:{
                'Accept':'application/json'
            }
        }).then((response)=>response.json())
        .then((json)=>{
            // setMenulist(json);
             console.log(`Pending orders list =`,json);
             json.forEach(element => {
                // console.log("Pending order id: ",element);
                dispatch(Update_recived_order(element))
             });
            
        })
    },[])
    socket.on('orderarrived',(orderid)=>{
        // console.log("Orderid recived from server-",orderid);
        // orderidlist.push(orderid)
        // setorderidlist(...orderidlist,orderid)
        if(!orderidlist.includes(orderid)){
        dispatch(Update_recived_order(orderid))
        //  // console.log("This orderid is already added...");
        orderidlist.push(orderid)
        // setorder(orderidlist)
        }
 
    })
    // useEffect(()=>{
    //     console.log("Order ids array: ",order);
    // },[order])
   
    useEffect(()=>{
        if(tableno!==0){
        //  Tableno.push(tableno)
        dispatch(updatearray(tableno))
        }
        // if(Tableno!==0||Tableno!==undefined){
        //   console.log("Tableno before disp: ",Tableno);
        // //   dispatch(updatearray(Tableno))
        // }
        // setorder(Tableno)

        console.log("Table no: ",Tableno);
    },[tableno])
    useEffect(()=>{
        setcount(count + 1)
        rerender_inspector('currentorder.js',count)
       
    },[])
    return <React.Fragment>
    <HomeHeader/>
    <div className="container-sm text-center">
    <h3>Current Orders</h3>
     
    </div>
    {RecievedArray.map((items)=>{
        return <ORderdiv orderid={items}/>
    })} 
    </React.Fragment>
}
export default Currentorder;