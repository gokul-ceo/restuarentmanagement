import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { EditIcon, EditIconfill, EyeIcon, EyeIconfill, PrintIcon, PrintIconfill, } from "./Icons";
const style = {
    aside:{
        width:'9.8rem',
        height:'150px',
        marginLeft:"0",
        position:'absolute',
        top:'3.5rem',
        left:'0px',
        zIndex:'1',
        
    }
}
function BillAside(){
    const[eyeclicked,seteyeclick] =useState(false)
    const[penclicked,setpenclick] =useState(false)
    const[printclicked,setprintclick] =useState(false)
    function changeeye(){
        seteyeclick(!eyeclicked)
        setpenclick(false)
        setprintclick(false)
    }
    function changepen(){
        setpenclick(!penclicked)
        setprintclick(false)
        seteyeclick( false)
    }
    function changeprint(){
        setprintclick(!printclicked)
        seteyeclick( false)
        setpenclick( false)

    }
    return <>
    <div style={style.aside}  className="container-sm d-flex flex-column  bg-secondary ">
        <div className="p-2"><h2 className="fs-5 "  onClick={changeeye}>{eyeclicked?<EyeIconfill/>:<EyeIcon/>}View Bill</h2></div>
        <div className="p-2"><h2 className="fs-5" onClick={changepen}>{penclicked?<EditIconfill/>:<EditIcon/>}Edit Bill</h2></div>
        <div className="p-2"><h2 className="fs-5" onClick={changeprint}>{printclicked?<PrintIconfill/>:<PrintIcon/>}Print Bill</h2></div>
    
    </div>
    </>
}

export default BillAside;