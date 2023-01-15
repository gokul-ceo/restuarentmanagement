import React, { useEffect } from "react";
import HomeHeader from "../../homeasserts/HomeHeader";
import man from './man.png'
import woman from './woman.png'

function EmployeeSalaryPage(){
    useEffect(()=>{
        fetch('http://localhost:4000/presentemployees',{
            method:'GET',
            headers:{
                'Accept':'application/json'
            }
        }).then((response)=>response.json())
        .then((json)=>{
            
            console.log("Result:",json);
            // setemplist(json)
            // dispatch(Addemp(json))
            // setemplist(json);
             
    
            
        })
    },[])
    return <>
    <HomeHeader/>
    <div className="container my-3" >
        <div className="row">
            <div className="col-2">
                <img alt="man_image" src={man} style={{'width':'30px','height':'30px'}}/>
            </div>  
            <div className="col-8   py-1">
                <span className="empname">Test employee</span>
            </div>
            <div className="col">
            {/* {add&& <img alt="man_image" src={added} style={{'width':'20px','height':'20px'}}/>} */}
            </div>

        </div>
    </div>
    </>
}

export default EmployeeSalaryPage;