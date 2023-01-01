import React from "react";
import { useEffect,useState } from "react";
import { Billingkeyboard } from "./Billingkeyboard";
import { rerender_inspector } from "../../Render_inspector";
import Header from "./Header";
function Billing(){
    const[count,setcount] = useState(1)
    useEffect(()=>{
        setcount(count + 1)
        rerender_inspector('Billing.jsx',count)
    },[])
    return <React.Fragment>
    <Header/>
    <Billingkeyboard/>
    </React.Fragment>
}
export default Billing;