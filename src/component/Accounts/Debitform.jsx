import React from "react";
function Debitform(props){
    return <div style={{'marginTop':"35px",'marginBottom':"20px"}} className={props.showstatus?"container-sm w-100 d-flex justify-content-between":"container-sm w-100 d-none justify-content-between"}>
    <input style={{"border":"none","borderBottom":"2px solid red","outline":"none"}} type="number" value={props.amount} onChange={props.handlefunc} />
    <span class="badge  text-bg-primary py-2 mx-2" onClick={props.save}>save</span>
    </div>
}

export default Debitform;