import React, { useEffect, useState } from "react";
import { useDispatch,useSelector} from "react-redux";
import socket from "../../context/socket";
import HomeHeader from "../../homeasserts/HomeHeader";
import { server_warning } from "../../Redux/global_state/global_state_slice";
import ItemBox from "./Itembox";
import danger from './danger.png'
// import axios from "axios";
// axios.get('hhttp://localhost:4000/menuitems')

function EditMenu(){
    // const Available_Menus = []
    const dispatch = useDispatch()
    const[Menulist,setMenulist] = useState([])
    const[warning,setwarning] = useState(false)
    // const serverwarning = useSelector((state)=>state.warn.warning)
    // useEffect(()=>{
    //     // console.log("This working warning!@!");
    //     // setwarning(true)
    //     if(serverwarning === true){
    //         setwarning(true)
    //     console.log("This working warning!@!");
    //     }
    //     else{
    //         if(serverwarning!==undefined){
    //             setwarning(false)

    //         }
    //     }
    // },[serverwarning])
    // const availableitems = useSelector((state)=>state.orderlist.available_Menu)
    
    useEffect(()=>{
    console.log("Entering for fetching!! ");
    fetch('http://localhost:4000/admindata/availablemenuitems',{
        method:'GET',
        headers:{
            'Accept':'application/json'
        }
    }).then((response)=>response.json())
    .then((json)=>{
        setMenulist(json);
         console.log("Menulist: ",json);

        
    })
    console.log("useeffctblock");
    socket.on('connection',socket=>{
        socket.emit('updateitem','Testing',()=>{
            console.log("Sent successfully");
        })
    })
    socket.on('change_warning',(warning)=>{
        console.log("Warning recieved from server is ",warning);
        dispatch(server_warning())
    })
    
    },[])
    return <React.Fragment>
        <HomeHeader/>
        {
            warning 
            ? <React.Fragment>
                
              <div style={{'width':'350px'}} className="container-sm mt-2 shadow-sm p-2  rounded border border-danger">
              <button  type="button" style={{'colorear':'red'}} className="btn-close" onClick={()=>{dispatch(server_warning())}} aria-label="Close"></button>
                <h6 style={{'fontSize':'15px','fontWeight':'bolder','color':'red'}} >You can't change the availability while customers are online!! </h6>
              </div>
            </React.Fragment>
            :null
        }
 
        <form  >
        <ul className="list-group list-group-flush">
            {
                Menulist.map((element)=>{
                    return <ItemBox price={element.Price} quantity={element.Quantity} name={element.Item} lastupdate={element.Lastupdated} status={element.Available}/>
                })
            }
            {/* <ItemBox name="Idly"/> 
            <ItemBox name="Dosa"/>
            <ItemBox name="Pongal"/>
            <ItemBox name="Vadai"/>
            <ItemBox name="Poori"/>
            <ItemBox name="Ravadosai"/> */}
        </ul>
        </form>
        {/* <button className="btn btn-danger" onClick={handlesumbit}  >Submit</button> */}
       
    </React.Fragment>
}

export default EditMenu;