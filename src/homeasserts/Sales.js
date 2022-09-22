import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const style={
    salesdiv:{
        width:'330px',
        height:'59px',
        borderRadius:'36px',
        backgroundColor:'#66DE93'
    }
}
function SalesDiv(){
    return <>
    <div style={style.salesdiv} className="container-sm text-center align-item-center my-4">
     <span style={style.name}>Total Sales:+12300</span>
    </div>
    </>

}

export default SalesDiv;