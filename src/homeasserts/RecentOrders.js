import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { RecentOrderHeader } from "./HomeIcons";
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
        color:'#FFFFFF'
    }
}
function RecentOrders(){
    return <>
    <div style={style.div} className="container-sm container-md my-3">
    <RecentOrderHeader divname={"Recent Order"} btnname={'View Order'} style={style}/>
   
    </div>
    </>
}

export default RecentOrders;