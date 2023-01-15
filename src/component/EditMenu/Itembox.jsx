import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatearray } from "../../Redux/global_state/orderarraySlice";
import { update_available_item } from "../../Redux/global_state/MenuSlice";

// import socket from "../context/socket";
import socket from "../../context/socket";
import { Socket } from "socket.io-client";
import warningimg from './warning.png'
// import './itembox.css'

// const starttest = async ()=>{
//     try{
//         console.log("starttest exevuting");
//         const response = await fetch('http://localhost:4000/menulist/',{
//             method:'GET'
//         });
//         console.log("Response: ",response.json);
//     } catch(error){
//         console.log(error);
//     }
// }
function ItemBox(props){
    const Name = props.name
    const itemprice = props.price;
    const itemquantity = props.quantity;
    const[check,setcheck] = useState(null);
    const[checkdb,setcheckdb] = useState("Not available")
    const[price,setprice] = useState(0)
    const[quantity,setquantity]=useState(0)
    const[statuscolor,setstatuscolor] = useState('red')
    const[error,seterror] = useState(false)
    const dispatch = useDispatch()
    // const list = useSelector((state)=>state.Menu.availableitems)
    const[selecteditem,setselecteditem]=useState({Item:'',Available:false})
    // const warning = useSelector((state)=>state.warn.warning)                       this work's fine.... may be used in  future
    // const[warning,setwarning] = useState(false)
    // const serverwarning = useSelector((state)=>state.warn.warning)
    // useEffect(()=>{
    //     // console.log("This working warning!@!");
    //     // setwarning(true)
    //     if(serverwarning === true){
    //         setwarning(true)
    //     console.log("This working warning!@!");
    //     }
    // },[serverwarning])
 
    // socket.emit('updateitem','testing updateitem')
    function handleclick(e){
        if((price===null||price===undefined||price===''||price===0)||(quantity===null||quantity===undefined||quantity===''||quantity===0)){
          seterror(true)
        }
        else{
            
                if(check){
                    setcheck(false)
                    setselecteditem({Item:Name,Available:false})
                    setcheckdb("Not available")
                    setstatuscolor('red')
                }else{
                    setcheck(true)
                    setselecteditem({Item:Name,Available:true,Price:price,Quantity:quantity})
                    setcheckdb("Available")
                    setstatuscolor('green')
                }
                seterror(false)
            
            
        }

    //    useEffect(()=>{
    //     if(check===true){
    //         setcheck(true)
    //         setcheckdb("Available")
    //         setstatuscolor('green')
    //     }
    //    },[warning])
        // dispatch(update_available_item(Name))
        // var message = 'testing this event'
        // socket.emit("changethisitem",'testing')
        // dispatch(updatearray(Name))
        // starttest()
        
        // var name=props.name
        // console.log("value: ",name);
   
       
    }
    useEffect(()=>{
        async function postdata(){
            console.log("Seleteditem: ",selecteditem);
            console.log("status of selecteditem");
            if(check!==null && selecteditem.Item !== ''){
                
                const requestoption = {
                    method:'POST',
                    headers: {'content-Type':'application/json'},
                    body: JSON.stringify(selecteditem)
                };
                const response = await fetch('http://localhost:4000/changethisitem',requestoption);
                const data =await response.json()
                console.log("DAte from response: ",data);
            }
        }
      
        // dispatch(updatearray(    ))
        postdata()
        // setprice(3)
        // setquantity(10)
        
    },[check])
    useEffect(()=>{
        // setcheck(true)
        if(props.status === true){
            setcheck(true)
            setcheckdb("Available")
            setstatuscolor('green')
        }
        setprice(itemprice)
        setquantity(itemquantity)
    },[props.status])
    var time = new Date(props.lastupdate).toLocaleString('en-GB')
    function handlepriceedit(e){
        // console.log(e.target.value);
        setprice(Number(e.target.value));
        seterror(false)
        // setselecteditem(...selecteditem,)
        // console.log("its working!!");
    }
    function handlequantityedit(e){
        setquantity(Number(e.target.value));
        seterror(false)
    }
    // var status = props.status===true?'green':'red';
    return <React.Fragment>
         <div style={{'width':'350px'}}  className="container-sm shadow border-bottom  p-3 mb-2 rounded">
                <div  className="container-sm d-flex justify-content-between" onClick={handleclick}>
                    <span>{props.name}</span>
                    <span style={{'fontSize':'10px','fontWeight':"bolder",'color':statuscolor}} className="ms-auto px-2 mt-1" >{checkdb}</span>
                    <input className="custome-control-input"  type='checkbox' value={props.name} checked={check} readOnly/>
                    
                </div>
                <div style={{'zIndex':'1'}} class="input-group my-2">
                <span class="input-group-text fs-6">Price & Quantity</span>
                 <input  type="Number" className="fs-6" aria-label="First name" value={price} onChange={handlepriceedit} class="form-control"/>
                    <input  type="Number" className="fs-6" aria-label="Last name" value={quantity} onChange={handlequantityedit} class="form-control"/>
                    </div>
                <span style={{'fontSize':'10px'}} className='text-muted'>Last updated at {time}</span>
            {error&&<h6 style={{'fontSize':'10px'}} className="text-danger mt-2"><img src={warningimg} style={{'fontSize':'12px','width':'20px','height':'20px'}}/>Enter the valid quantity and price!</h6>}
            </div>
    </React.Fragment>
}

export default ItemBox;