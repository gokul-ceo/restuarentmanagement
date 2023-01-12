import React from "react";

function Creditform(props){
    return <div style={{'marginTop':"35px",'marginBottom':"20px"}} className={props.showstatus?"container-sm w-100 d-flex justify-content-between":"container-sm w-100 d-none justify-content-between"}>
    <input style={{"border":"none","borderBottom":"2px solid red","outline":"none"}} type="number" value={props.amount} onChange={props.handlefunc} />
    <span class="badge  text-bg-primary py-2 mx-2" onClick={props.save}>save</span>
    </div>
}
export default Creditform;

// eslint-disable-next-line no-lone-blocks
{/* <div style={{'marginTop':"35px",'marginBottom':"20px"}} className={show?"container-sm w-100 d-flex justify-content-between":"container-sm w-100 d-none justify-content-between"}>
        <input style={{"border":"none","borderBottom":"2px solid red","outline":"none"}} type="number" value={addedamount} onChange={handleinputentry} />
        <span class="badge  text-bg-primary py-2 mx-2" onClick={handlesave}>save</span>
        </div> */}