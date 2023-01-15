import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ErrorBoundary} from 'react-error-boundary'
import Home from "./Home";
import Billing from "./component/Billing/Billing.jsx";
import Orderdisplay from "./orderdisplay.jsx";
import Currentorder from "./RecentOrders/Currentorder";
import socket from "./context/socket";
import store from "./Redux/store";
import { Provider } from "react-redux";
import EditMenu from "./component/EditMenu/EditMenu";
import AccountMainPage from "./component/Accounts/Accountsmainpage";
import Employepage from "./component/Employee/Employeepage.jsx";
import Loginpage from "./component/Auth/login";
import EmployeeSalaryPage from "./component/Employee/Employeesalarypage";
import ModernBilling from "./component/NewBilling/Nbilling";

function ErrorHandler({error}){
    return (
        <div role="alert">
          <p>An error occurred:</p>
          <pre>{error.message}</pre>
        </div>
      )
}
function App(){ 
      // fetch('http://localhost:4000/updatemenulist',{
      //   method:''
      // })

    const[connected,setconnected] = useState(false)
    // const[notify,setnotify] = useState(false) //should try to use
    if(!connected){
      socket.on('connect',()=>{
        console.log("connected");
        setconnected(true)
      }
      );
      // if(!notify){
      // socket.emit('introduceme','Admin');
      // setnotify(true)
      // }
      
    }
    socket.on("testing",(message)=>{
      console.log("A user has going to order! from socket id: ",message);
    })
    socket.on('disconnectnews',(message)=>{
      console.log(`We recieved a sad news that ${message}`);
    });
  
    // socket.on('recievedorder',(arg)=>{
    //   console.log("REcived order: ",arg);
    // })
    return (
    <ErrorBoundary FallbackComponent={ErrorHandler}>
      <Provider store={store} >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
       <Route path="billing" element={ <Billing/>}/>
       <Route path="orders" element={<Orderdisplay/>}/>
       <Route path="editmenu" element={<EditMenu/>}/>
       <Route path="currentorder" element={<Currentorder/>} />
       <Route path="accounts" element={<AccountMainPage/>} />
       <Route path="employees" element={<Employepage/>} />
       <Route path="presentemployees" element={<EmployeeSalaryPage/>} />
       <Route path="newbilling" element={<ModernBilling/>} />
       <Route path="login" element={<Loginpage/>} />
      </Routes>
    </BrowserRouter>
    </Provider>
    </ErrorBoundary>
    )
    
}

export default App;