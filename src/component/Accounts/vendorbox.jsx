import React from "react";

function Vendorbox(props){
    return <React.Fragment>
         <div style={{"width":"340px","height":'100px'}} className="container-sm  my-3  justify-content-between rounded border shadow-lg ">
        <h6 style={{"fontSize":"20px",'marginTop':"3px"}}>RNC</h6>
        <div style={{'marginTop':"35px"}} className="container-sm w-100  d-flex justify-content-between">
        <input style={{"border":"none","borderBottom":"2px solid red","outline":"none"}} type="number" />
        <span class="badge text-bg-danger py-2 mx-2">Add debit</span>
        <input accept="image/*" id="icon-button-file"
        type="file" style={{ display: 'none' }} />
       <input accept="image/*" id="icon-button-file"
        type="file" style={{ display: 'none' }} />
      <label htmlFor="icon-button-file">
        <button type="button"  >
            {/* <input type="file" />upload pic */}
        </button>
        {/* <IconButton color="primary" aria-label="upload picture"
        component="span"> */}
          {/* <PhotoCamera /> */}
        {/* </IconButton> */}
      </label>
        </div>
        </div>
    </React.Fragment>
}

export default Vendorbox;