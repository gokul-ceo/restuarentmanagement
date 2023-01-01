import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useSearchParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {EmployeeIcon, MenuIcon, UserIcon} from './HomeIcons'
import styled from "styled-components";
import { Link } from "react-router-dom";
import Currentorder from "../RecentOrders/Currentorder";
import { rerender_inspector } from "../Render_inspector";
import { useSelector } from "react-redux";


const style={
    header:{
        height:'52px',
        backgroundColor:'#FF616D'
    },
    brandName:{
        margin:'0.6rem 0',
        fontFamily:'Inter,sans-serif',
        fontWeight:'bold',
        fontSize:'20px',
        color:'white'
    },
    // sidediv:{
    //     height:'400px',
    //     width:'200px',
    //     position:'absolute',
    //     top:'20px',
    // }
}

function HomeHeader(){
    const[disabledLink,setdisabledLink] = useState(false)
  
    // function render_inspector(){
    //      console.log(`HomeHeader.js is rendered for ${count} times`);
    //     }
    // let navigate = useNavigate();
    // function changelocation(placetogo){
    //     navigate(placetogo,{replace:true});
    //     window.location.reload()
    // }
    // const[Searchparams] = useSearchParams();
    // console.log("Searchparams: ",Searchparams.entries());
    // const[open, setopen] = useState(false)
    // function handleonclick(){
    //     setopen(!open)
    // }
    // function Sidediv(){
    //     return(<Fragment>
    //         <Sidemenudiv>
    //             <h2>Hello testing!</h2>
    //         </Sidemenudiv>
    //     </Fragment>)
        
        
    // }
    const[count,setcount] = useState(1)
    useEffect(()=>{
        setcount(count + 1)
        rerender_inspector('homeheader.js',count)
    },[])
    
    return <React.Fragment>
    <div style={style.header} className="container-lg position-sticky  d-flex justify-content-around">
    <div class="dropdown">
    {/* <a class=" dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> */}
    {/* <Link to="currentorders"> */}
    <svg xmlns="http://www.w3.org/2000/svg" className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"   width='30' height='30' fill="currentColor" class="bi bi-list my-2" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
  </svg>
  {/* </Link> */}
  {/* </a> */}
  {/* <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
 
  </button> */}
  <ul class="dropdown-menu">
    <li aria-disabled="true" ><Link className="dropdown-item"  to="currentorders">View orders</Link> </li>
    <li><a class="dropdown-item" href="/src/RecentOrders/Currentorder.js">Update Menu</a></li>
    {/* <li><a class="dropdown-item" href="#"></a></li> */}
  </ul>
</div>
    
    {/* <MenuIcon w={30} h={30} onClick={handleonclick} /> */}
    <span style={style.brandName}>Sri Saravana</span>
    <EmployeeIcon w={30} h={30}/>
    <UserIcon/>
    </div>
    
    
    </React.Fragment>
}
export default HomeHeader;