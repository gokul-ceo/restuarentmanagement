import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { RecentOrderHeader } from "./HomeIcons";
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
    return <>
    <div style={style.recentdiv} className="container">
    <RecentOrderHeader divname={"Recent Bills"} btnname={'View bills'} style={style}/>
         
    </div>
    </>
}
export default RecentBills;