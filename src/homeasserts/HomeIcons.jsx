/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import employeeicon from "./icon.png";
const server_url = "http://localhost:4000/";

export function MenuIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.w}
      height={props.h}
      fill="currentColor"
      class="bi bi-list my-2"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
      />
    </svg>
  );
}
export function EmployeeIcon() {
  const [loading, setloading] = useState(false);
  const [count, setcount] = useState(0);
  useEffect(() => {
    setloading(true);
    fetch(server_url + "admin/employee/getcount", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((value) => {
        setcount(value);
        setloading(false);
      });
  }, []);
  return (
    <button style={{ border: "none", backgroundColor: "inherit" }}>
      <img
        alt="icon.png"
        src={employeeicon}
        style={{ width: "30px", height: "30px" }}
      />
      <span class="position-absolute  top-1 start-200 translate-middle badge rounded-pill bg-danger">
        {loading ? null : count}
      </span>
    </button>
  );
}

export function UserIcon(props) {
  var isloggedin = props.logingstatus;
  return (
    <div
      onClick={props.action}
      style={{
        width: "80px",
        height: "25px",
        borderRadius: "92px",
        backgroundColor: "#D9D9D9",
        margin: "0.7rem 0",
      }}
    >
      {" "}
      <span
        style={{
          marginLeft: "1.3rem",
          paddingLeft: "0",
          // fontFamily: "Inter,sans-serif",
          fontSize: "9px",
          fontWeight: "bold",
        }}
      >
        {isloggedin ? "Admin" : "Login"}
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        class="bi bi-person-circle "
        style={{ marginLeft: "7px", marginBottom: "2px" }}
        viewBox="0 0 16 16"
      >
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        <path
          fill-rule="evenodd"
          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
        />
      </svg>
    </div>
  );
}
// export function RecentOrderHeader(props){
//     return <div className="container-sm d-flex justify-content-between">
//     <span style={{fontFamily:'Roboto,sans-serif',fontSize:'17px',fontWeight:'bold',color:'#FF616D'}}>{props.divname}</span>
//     <div style={{width:'70px',height:'16px',borderRadius:'10px',backgroundColor:'#FF616D'}} className='my-1'>
//       <h2 style={{fontSize:'12px'}}><a href='#' style={props.style.anchor}>{props.btnname}</a></h2>
//     </div>
//     </div>
// }
