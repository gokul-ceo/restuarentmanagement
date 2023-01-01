import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
// import socket from "/src/RecentOrders/socket.js";
import socket from "../context/socket";
const style = {
    div:{
        backgroundColor:'#E3E3E3',
        borderRadius:'22px',
        height:'175px',
        width:'332px'
    },
    anchor:{
        textDecoration:'none',
        color:'inherit',
        margin:'4px',
        fontFamily:'Roboto,sans-serif',
        fontSize:'12px',
        fontWeight:'bold',
        //eslint-disable-next-line  
        color:'white'
    }
}
function RecentOrders(){
   
    return <React.Fragment>
    <div style={style.div} className="container-sm container-md my-3">
    <div className="container-sm d-flex justify-content-between">
    <span style={{fontFamily:'Roboto,sans-serif',fontSize:'17px',fontWeight:'bold',color:'#FF616D'}}>Recent Orders</span>
    <div style={{width:'70px',height:'16px',borderRadius:'10px',backgroundColor:'#FF616D'}} className='my-1'>
      <h2 style={{fontSize:'12px'}}><Link to='/currentorders'><span style={style.anchor}>View Order</span></Link></h2>
    </div>
    </div>

   
    </div>
    </React.Fragment>
}

export default RecentOrders;