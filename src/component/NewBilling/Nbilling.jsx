import React, { useState } from "react";
import HomeHeader from "../../homeasserts/HomeHeader";
function ModernBilling(){
    function Timingdiv(){
        const [breakfast,setbreakfast] = useState(false)
        const [lunch,setlunch] = useState(false)
        const [dinner,setdinner] = useState(false)
        const handledinner = ()=>{
            setdinner(true)
            setlunch(false)
            setbreakfast(false)
        }
        const handlelunch = ()=>{
            setdinner(false)
            setlunch(true)
            setbreakfast(false)
        }
        const handlebreakfast = ()=>{
            setdinner(false)
            setlunch(false)
            setbreakfast(true)
        }
        return <>
           <div>
        <div className="container d-flex justify-content-between my-2">
            <button onClick={handlebreakfast} style={breakfast?{'width':'100px','margin':'0 10px','height':'30px','padding':'0','boxShadow':'0 8px 20px green'}:{'border':'1px solid white','width':'100px','margin':'0 10px','height':'30px','padding':'0'}} className="btn">Breakfast</button>
            <button onClick={handlelunch} style={lunch?{'width':'100px','margin':'0 10px','height':'30px','padding':'0','boxShadow':'0 8px 20px green'}:{'border':'1px solid white','width':'100px','margin':'0 10px','height':'30px','padding':'0'}} className="btn">Lunch</button>
            <button onClick={handledinner} style={dinner?{'width':'100px','margin':'0 10px','height':'30px','padding':'0','boxShadow':'0 8px 20px green'}:{'border':'1px solid white','width':'100px','margin':'0 10px','height':'30px','padding':'0'}}className="btn">Dinner</button>

      
  
        </div>
    </div>
        </>
    }
    function Menudiv(){
        function Menubox(props){
            const[show,setshow]=useState(false)
            const[value,setvalue]=useState(1)
            return <>
             <div  style={{'height':'inherit','width':'90px','borderRadius':'12px'}}  className="container border border-success mx-1 my-3">
                  {show&&<div style={{'position':'relative','top':'-15px','width':'70px','marginLeft':'-3px','borderRadius':'7px','border':'2px solid green','backgroundColor':'#C9FFDD'}}>
                   <div className="d-flex justify-content-between"> 
                   <h6 style={{'backgroundColor':'green','margin':'3px','borderRadius':'50%','padding':'0px 2px 0px 2px'}}>+</h6>
                   <input style={{'caretColor':'transparent','textAlign':'right','border':'none','outline':'none','width':'100%','backgroundColor':'inherit','borderBottom':'2px solid green','height':'23px'}}  type='number' ></input>
                   <h6 style={{'backgroundColor':'green','margin':'3px','borderRadius':'50%','padding':'0px 4px 0px 4px'}}>-</h6>

                   </div>
                  </div>}
                  <div style={{'marginTop':'30px','textAlign':'center','fontSize':'16px'}} >
                  <h6 onClick={()=>setshow(!show)} style={{'marginLeft':'-7px'}}>{props.name}</h6>
                  </div>
            </div>
            </>
        }
        return <>
        <div className=" d-flex align-content-around flex-wrap">
           <Menubox name='idly'/>

        </div>

        </>
    }
    return <>
    <HomeHeader/>
   <Timingdiv/>
   <Menudiv/>
    </>
}

export default ModernBilling;