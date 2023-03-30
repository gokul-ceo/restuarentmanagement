import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
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
import PrivateRoute from "./Auth/Auth";
import Vendorlistpage from "./component/Accounts/VendorList";
import ViewBillmainpage from "./component/ViewBills/ViewBillmainpage";
const server_url = "http://localhost:4000/";
function ErrorHandler({ error }) {
  return (
    <div role="alert">
      <p>An error occurred:</p>
      <pre>{error.message}</pre>
    </div>
  );
}
function App() {
  // fetch('http://localhost:4000/updatemenulist',{
  //   method:''
  // })

  const [connected, setconnected] = useState(false);
  // const[notify,setnotify] = useState(false) //should try to use
  if (!connected) {
    socket.on("connect", () => {
      console.log("connected");
      setconnected(true);
    });
    // if(!notify){
    // socket.emit('introduceme','Admin');
    // setnotify(true)
    // }
  }
  socket.on("testing", (message) => {
    console.log("A user has going to order! from socket id: ", message);
  });
  socket.on("disconnectnews", (message) => {
    console.log(`We recieved a sad news that -${socket.id} ${message}`);
  });

  // socket.on('recievedorder',(arg)=>{
  //   console.log("REcived order: ",arg);
  // })
  return (
    <ErrorBoundary FallbackComponent={ErrorHandler}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="billing"
              element={
                // <PrivateRoute>
                // {" "}
                <Billing />
                // </PrivateRoute>
              }
            />
            <Route
              path="orders"
              element={
                // <PrivateRoute>
                <Orderdisplay />
                // </PrivateRoute>
              }
            />
            <Route
              path="editmenu"
              element={
                // <PrivateRoute>
                <EditMenu />
                // </PrivateRoute>
              }
            />
            <Route
              path="currentorder"
              element={
                // <PrivateRoute>
                <Currentorder />
                // </PrivateRoute>
              }
            />
            <Route
              path="accounts"
              element={
                // <PrivateRoute>
                <AccountMainPage />
                // </PrivateRoute>
              }
            />
            <Route
              path="employees"
              element={
                // <PrivateRoute>
                <Employepage />
                // </PrivateRoute>
              }
            />
            <Route
              path="presentemployees"
              element={
                // <PrivateRoute>
                <EmployeeSalaryPage />
                // </PrivateRoute>
              }
            />
            <Route
              path="newbilling"
              element={
                // <PrivateRoute>
                <ModernBilling />
                // </PrivateRoute>
              }
            />
            <Route
              path="vendorlist"
              element={
                // <PrivateRoute>
                <Vendorlistpage />
                // </PrivateRoute>
              }
            />
            <Route
              path="customerspage"
              element={
                // <PrivateRoute>
                <Vendorlistpage />
                // </PrivateRoute>
              }
            />
            <Route
              path="viewbills"
              element={
                // <PrivateRoute>
                <ViewBillmainpage />
                // </PrivateRoute>
              }
            />

            <Route path="login" element={<Loginpage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
