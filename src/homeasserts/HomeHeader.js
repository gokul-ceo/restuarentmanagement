import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {EmployeeIcon, MenuIcon, UserIcon} from './HomeIcons'
const style={
    header:{
        height:'52px'
    },
    brandName:{
        margin:'0.6rem 0'
    }
}
function HomeHeader(){
    return <>
    <div style={style.header} className="container-lg bg-secondary d-flex justify-content-around">
    <MenuIcon w={30} h={30}/>
    <span style={style.brandName}>Sri Saravana</span>
    <EmployeeIcon w={30} h={30}/>
    <UserIcon/>
    </div>
    </>
}
export default HomeHeader;