import React, { Fragment, useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
import employeeicon from "./icon.png";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import order from "./order.png";
import invoice from "./manageinvoice.png";
import employee from "./manageemploye.png";
import { useNavigate } from "react-router-dom";
import bills from "./payment.png";
import update from "./updated.png";
import home from "./home.png";
import logout from "./logout.png";
import customer from "./customer.png";
// import { useSearchParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { EmployeeIcon, MenuIcon, UserIcon } from "./HomeIcons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Currentorder from "../RecentOrders/Currentorder";
import { rerender_inspector } from "../Render_inspector";
import { useDispatch, useSelector } from "react-redux";
import {
  Assign_Role,
  setToken,
} from "../Redux/global_state/global_state_slice";
const server_url = "http://localhost:4000/";

const style = {
  header: {
    height: "52px",
    backgroundColor: "#D32626",
    zIndex: "1000",
  },
  brandName: {
    margin: "0.6rem 0",
    fontWeight: "bold",
    fontSize: "20px",
    color: "white",
  },
  // sidediv:{
  //     height:'400px',
  //     width:'200px',
  //     position:'absolute',
  //     top:'20px',
  // }
};

function HomeHeader() {
  const navigate = useNavigate();
  const [disabledLink, setdisabledLink] = useState(false);
  const [islogged, setlogged] = useState(false);
  const [show, setshow] = useState(false);
  function handlemodelclose() {
    setshow(!show);
  }
  function Sidecanvase(props) {
    return (
      <>
        <Offcanvas show={props.show} onHide={props.handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="my-2">
              <div className="d-flex">
                <img
                  alt="order.png"
                  src={home}
                  style={{
                    width: "20px",
                    height: "20px",
                    marginLeft: "5px",
                    marginRight: "10px",
                  }}
                />
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/"
                >
                  <span style={{ marginBottom: "10px", display: "block" }}>
                    Home
                  </span>
                </Link>
              </div>
              <div className="d-flex">
                <img
                  alt="order.png"
                  src={order}
                  style={{
                    width: "20px",
                    height: "20px",
                    marginLeft: "5px",
                    marginRight: "10px",
                  }}
                />
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/currentorder"
                >
                  <span style={{ marginBottom: "10px", display: "block" }}>
                    Currentorders
                  </span>
                </Link>
              </div>
              <div className="d-flex">
                <img
                  alt="order.png"
                  src={update}
                  style={{
                    width: "20px",
                    height: "20px",
                    marginLeft: "5px",
                    marginRight: "10px",
                  }}
                />
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/editmenu"
                >
                  <span style={{ marginBottom: "10px", display: "block" }}>
                    Update Menu
                  </span>
                </Link>
              </div>
              <div className="d-flex">
                <img
                  alt="order.png"
                  src={invoice}
                  style={{
                    width: "20px",
                    height: "20px",
                    marginLeft: "5px",
                    marginRight: "10px",
                  }}
                />
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/accounts"
                >
                  <span style={{ marginBottom: "10px", display: "block" }}>
                    Manage invoices
                  </span>
                </Link>
              </div>
              <div className="d-flex">
                <img
                  alt="order.png"
                  src={employee}
                  style={{
                    width: "20px",
                    height: "20px",
                    marginLeft: "5px",
                    marginRight: "10px",
                  }}
                />
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/employees"
                >
                  <span style={{ marginBottom: "10px", display: "block" }}>
                    Manage Employees
                  </span>
                </Link>
              </div>
              <div className="d-flex">
                <img
                  alt="order.png"
                  src={bills}
                  style={{
                    width: "20px",
                    height: "20px",
                    marginLeft: "5px",
                    marginRight: "10px",
                  }}
                />
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/viewbills"
                >
                  <span style={{ marginBottom: "10px", display: "block" }}>
                    View bills
                  </span>
                </Link>
              </div>
              <div className="d-flex">
                <img
                  alt="order.png"
                  src={customer}
                  style={{
                    width: "20px",
                    height: "20px",
                    marginLeft: "5px",
                    marginRight: "10px",
                  }}
                />
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/employees"
                >
                  <span style={{ marginBottom: "10px", display: "block" }}>
                    Manage Customers
                  </span>
                </Link>
              </div>
              <div className="d-flex">
                <img
                  alt="order.png"
                  src={logout}
                  style={{
                    width: "20px",
                    height: "20px",
                    marginLeft: "5px",
                    marginRight: "10px",
                  }}
                />
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/employees"
                >
                  <span style={{ marginBottom: "10px", display: "block" }}>
                    Logout
                  </span>
                </Link>
              </div>
            </div>
          </Offcanvas.Body>
          <div>
            <span>Copyright@2023</span>
          </div>
        </Offcanvas>
      </>
    );
  }

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
  const [count, setcount] = useState(1);
  useEffect(() => {
    setcount(count + 1);
    rerender_inspector("homeheader.js", count);
  }, []);

  const [username, setusername] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const getUser = () => {
      fetch(server_url + "login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            localStorage.removeItem("Name");
            localStorage.removeItem("Token");
            localStorage.removeItem("Imagelink");
            console.log("Authentication failed!");
            console.log("Localstorage has been cleared!");
            navigate("/login");
          }
        })
        .then((resObject) => {
          setlogged(true);
          console.log("Response Object:", resObject);
          dispatch(Assign_Role(resObject.role));
          setusername(resObject.name);
          dispatch(setToken(resObject.token));
          localStorage.setItem("Name", resObject.name);
          localStorage.setItem("Token", resObject.token);
          localStorage.setItem("Imagelink", resObject.img);
          // setuserimage(String(resObject.user.picture))
          // console.log("Userimage linK:",String(resObject.user.picture));
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    };
    getUser();
  }, []);

  return (
    <React.Fragment>
      <div
        style={style.header}
        className="container-lg sticky-top  d-flex justify-content-around"
      >
        <div class="dropdown">
          {/* <a class=" dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> */}
          {/* <Link to="currentorders"> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            onClick={handlemodelclose}
            className="dropdown-toggle"
            href="#"
            role="button"
            aria-expanded="false"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-list my-2"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
          <Sidecanvase show={show} handleClose={handlemodelclose} />
          {/* </Link> */}
          {/* </a> */}
          {/* <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
 
  </button> */}
        </div>

        {/* <MenuIcon w={30} h={30} onClick={handleonclick} /> */}
        <span style={style.brandName}>Sri Saravana</span>

        <EmployeeIcon />
        {/* <UserIcon action={hanldeuserclick} loginstatus={islogged}/> */}
        <div
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
            {islogged ? username : "Login"}
          </span>
        </div>
      </div>
    </React.Fragment>
  );
}
export default HomeHeader;
