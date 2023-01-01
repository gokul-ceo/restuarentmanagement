import React from "react";
import HomeHeader from "../../homeasserts/HomeHeader";
import Vendorbox from "./vendorbox";
// import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from "react-redux";
import { ShowAddvendorModal } from "../../Redux/Accountsredux/vendorSlice";
function AccountMainPage(){
    const dispatch = useDispatch()
    const shouldshow_vendormodal = useSelector((state)=>state.newvendor.addvendor)
    return <React.Fragment>
        <HomeHeader/>
        <div style={{"textAlign":"center"}} className="container-sm border ">
         <h6>Credit & Debit Record</h6>
         
        </div>
        <Vendorbox/>
        <Vendorbox/>
        <Vendorbox/>
        <Vendorbox/>
        <Vendorbox/>
        <Vendorbox/>
        <Vendorbox/>
        <Vendorbox/>
        <Vendorbox/>
        <Vendorbox/>
        <div className="container my-3">
            <button className="btn btn-primary fs-6" onClick={()=>dispatch(ShowAddvendorModal())}>Add vendor</button>
        </div>
        {/* {shouldshow_vendormodal?<MyVerticallyCenteredModal/>:null} */}
    </React.Fragment>   
}

export default AccountMainPage;