import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect,useState } from "react";
// import { rerender_inspector } from "/src/Render_inspector";
const style={
    bulkdiv:{
        height:'140px',
        width:'327px',
        borderRadius:'9px',
        backgroundColor:'#F3F1F1'
    },
    anchor:{
        textDecoration:'none',
        color:'inherit',
        fontFamily:'Roboto,sans-serif',
        fontSize:'12px',
        fontWeight:'bold',
        // eslint-disable-next-line no-dupe-keys
        color:'#FFFF',
        margin:'0.5rem'
    }
}
function Bulkorderdiv(){
    return <React.Fragment>
    <div style={style.bulkdiv} className="container-sm">
    <div className="container-sm d-flex justify-content-between">
    <span>BulkOrders</span>
    <div style={{width:'115px',height:'25px',borderRadius:'8px',backgroundColor:'#FF616D'}} className='my-1'>
      <h2 style={{fontSize:'12px'}}><span  style={style.anchor}>2 Orders</span></h2>
    </div>
    </div>
    </div>
    </React.Fragment>
}

export default Bulkorderdiv;