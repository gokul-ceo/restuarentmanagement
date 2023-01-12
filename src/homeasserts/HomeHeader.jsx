import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
// import { useSearchParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {EmployeeIcon, MenuIcon, UserIcon} from './HomeIcons'
import styled from "styled-components";
import { Link } from "react-router-dom";
import Currentorder from "../RecentOrders/Currentorder";
import { rerender_inspector } from "../Render_inspector";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../Redux/global_state/global_state_slice";


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
    const[disabledLink,setdisabledLink] = useState(false);
    const[islogged,setlogged] = useState(false);
  
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
    function hanldeuserclick(){
        window.open("http://localhost:4000/auth/google","_self")
        // fetch('http://localhost:4000/auth/google',{
        //     mode:'no-cors'
        // })
        // .then((response)=>response.json)
        // .then((json)=>{
        //     console.log("Result:",json);
        // })
    }
    const[username,setusername]=useState(null)
    const dispatch = useDispatch()
    useEffect(()=>{
        const getUser =()=>{
            fetch('http://localhost:4000/login/success',{
                method:'GET',
                credentials:"include",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json",
                    "Access-Control-Allow-Credentials":true,
                },
                
            }).then(response=>{
                if(response.status===200)return response.json();
                throw new Error("authentication has been failed!!..")
            }).then(resObject=>{
                setlogged(true)
                console.log("Response Object:",resObject);
                setusername(resObject.name);
                dispatch(setToken(resObject.token))
                Cookies.set('token',resObject.token)
                // setuserimage(String(resObject.user.picture))
                // console.log("Userimage linK:",String(resObject.user.picture));

            }).catch(err=>{
                console.log("Error:",err);
            })
        };
        getUser()
    },[]);
    
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
    <li><Link className="dropdown-item"  to="currentorders">View orders</Link> </li>
    <li><a class="dropdown-item" href="/src/RecentOrders/Currentorder.js">Update Menu</a></li>
    {/* <li><a class="dropdown-item" href="#"></a></li> */}
  </ul>
</div>

    
    {/* <MenuIcon w={30} h={30} onClick={handleonclick} /> */}
    <span style={style.brandName}>Sri Saravana</span>
    <EmployeeIcon w={30} h={30}/>
    {/* <UserIcon action={hanldeuserclick} loginstatus={islogged}/> */}
    <div onClick={hanldeuserclick} style={{width:'80px',height:'25px',borderRadius:'92px',backgroundColor:'#D9D9D9',margin:'0.7rem 0'}}> <span style={{marginLeft:'1.3rem',paddingLeft:'0',fontFamily:'Inter,sans-serif',fontSize:'9px',fontWeight:'bold'}}>{islogged?username:'Login'}</span>
    
    </div>
    </div>
    
    
    </React.Fragment>
}
export default HomeHeader;