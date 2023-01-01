import React, { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { EditIcon, EditIconfill, EyeIcon, EyeIconfill, PrintIcon, PrintIconfill, } from "./Icons";
import { rerender_inspector } from "../../Render_inspector";
const style = {
    aside:{
        width:'9.8rem',
        height:'150px',
        marginLeft:"0",
        position:'absolute',
        top:'1.8rem',
        left:'0px',
        zIndex:'1',
        
    }
}
function BillAside(){
    const[count,setcount] = useState(1)
    useEffect(()=>{
        setcount(count + 1)
        rerender_inspector('BillAside.js',count)
    },[])
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
    return <React.Fragment>
    <div style={style.aside}  className="container-sm d-flex flex-column  bg-secondary ">
        <div className="p-2"><h2 className="fs-5 "  onClick={changeeye}>{eyeclicked?<EyeIconfill/>:<EyeIcon/>}View Bill</h2></div>
        <div className="p-2"><h2 className="fs-5" onClick={changepen}>{penclicked?<EditIconfill/>:<EditIcon/>}Edit Bill</h2></div>
        <div className="p-2"><h2 className="fs-5" onClick={changeprint}>{printclicked?<PrintIconfill/>:<PrintIcon/>}Print Bill</h2></div>
    
    </div>
    </React.Fragment>
}

export default BillAside;