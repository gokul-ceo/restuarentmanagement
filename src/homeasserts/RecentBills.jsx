import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const style={
    recentdiv:{
        height:'65px',
        width:'328px',
        backgroundColor:'#EEEEEE',
        borderRadius:'22px',
        marginTop:'20px'
    },
    anchor:{
        textDecoration:'none',
        color:'inherit',
        margin:'4px',
        fontFamily:'Roboto,sans-serif',
        fontSize:'12px',
        fontWeight:'bold',
        // eslint-disable-next-line no-dupe-keys
        color:'#FFFFFF'
    }
}

function RecentBills(){
    return <React.Fragment>
    <div style={style.recentdiv} className="container">
    <div className="container-sm d-flex justify-content-between">
    <span style={{fontFamily:'Roboto,sans-serif',fontSize:'17px',fontWeight:'bold',color:'#FF616D'}}>Recent Orders</span>
    <div style={{width:'70px',height:'16px',borderRadius:'10px',backgroundColor:'#FF616D'}} className='my-1'>
      <h2 style={{fontSize:'12px'}}><a href='...' style={style.anchor}>View Order</a></h2>
    </div>
    </div>
         
    </div>
    </React.Fragment>
}
export default RecentBills;