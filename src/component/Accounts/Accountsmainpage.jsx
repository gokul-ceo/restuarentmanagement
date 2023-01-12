import React, { useEffect, useState } from "react";
import HomeHeader from "../../homeasserts/HomeHeader";
import Vendorbox from "./vendorbox";
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from "react-redux";
import { ShowAddvendorModal } from "../../Redux/Accountsredux/vendorSlice";
import Vendormodel from "./Vendormodel";
import randomcolor from 'randomcolor'
import { useCookies } from "react-cookie";
// var color = randomcolor()
function AccountMainPage(){
    const dispatch = useDispatch()
    const [vendorlist,setvendorlist] = useState([])
    const[showvendormodel,setshowvendormodel] = useState(false)
    const shouldshow_vendormodal = useSelector((state)=>state.newvendor.addvendor)
    useEffect(()=>{
        function getCookie(name) {
            let cookie = {};
            document.cookie.split(';').forEach(function(el) {
              let [k,v] = el.split('=');
              cookie[k.trim()] = v;
            })
            // console.log("Cookie found:",cookie[name]); 
            return cookie[name];
          }
          var token = getCookie('token')
            fetch(`http://localhost:4000/vendors/null?token=${token}`,{
                method:'GET',
                headers:{
                    'Accept':'application/json'
                }
            }).then((response)=>response.json())
            .then((json)=>{
                // setMenulist(json);
                setvendorlist(json)
                 console.log("vendorlist: ",json);
        
                
            })
    },[])
    useEffect(()=>{
        // console.log("Verdore permsion has chantes!!");
        setshowvendormodel(shouldshow_vendormodal)
    },[shouldshow_vendormodal, showvendormodel])
    // useEffect(()=>{
        
    // })
    return <React.Fragment>
        <HomeHeader/>
        <div style={{"textAlign":"center"}} className="container-sm border ">
         <h6>Credit & Debit Record</h6>
         
        </div>
        {vendorlist.map((vendor)=>{
            return  <Vendorbox color={randomcolor()}  name={vendor}/>
        })}
        {/* <Vendorbox/>
        <Vendorbox/>
        <Vendorbox/>
        <Vendorbox/>
        <Vendorbox/>
        <Vendorbox/>
        <Vendorbox/>
        <Vendorbox/>
        <Vendorbox/>
        <Vendorbox/> */}
        <div className="container my-3">
            <button className="btn btn-primary fs-6" onClick={()=>dispatch(ShowAddvendorModal())}>Add vendor</button>
        </div>
        {/* {showvendormodel?<Vendormodel/>:null}

         */}
         <Vendormodel show={shouldshow_vendormodal} onHide={()=>dispatch(ShowAddvendorModal())}/>
    </React.Fragment>   
}

export default AccountMainPage;