import React from "react";
import style from "./login.module.css";
import { useState, useEffect } from "react";
import hello from "./hello.gif";
import g from "./google.png";
import { useDispatch } from "react-redux";

// const server_url = "https://hsswebend-4z4hd76enq-em.a.run.app/";
const server_url = "http://localhost:4000/";

var date = new Date();
var year = date.getFullYear();
function Loginpage() {
  const dispatch = useDispatch();
  const [verified, setverified] = useState(false);
  const [startverifying, setstartverifying] = useState(false);
  const [name, setname] = useState("");
  const [empid, setempid] = useState("");
  const [error, seterror] = useState("");
  const handlename = (e) => {
    setname(e.target.value);
    seterror("");
  };
  const handleempid = (e) => {
    setempid(e.target.value);
    seterror("");
  };
  function Hisnotthere() {
    if (empid["H"]) {
      setstartverifying(true);
      seterror("");
    } else {
      setstartverifying(false);
      seterror("Emp Id is invalid!");
    }
  }
  useEffect(() => {
    console.log("Name:", name);
    console.log("Empid:", empid);
    empid.length === 6
      ? empid.includes("H")
        ? setstartverifying(true)
        : Hisnotthere()
      : setstartverifying(false);
  }, [name, empid]);
  function handlelogin() {
    // console.log("Name:",localStorage.getItem("Name"));
    window.open(server_url + "auth/google", "_self");
  }
  var mt = window.innerHeight / 6;
  return (
    <>
      <div
        style={{ width: "300px", marginTop: `${mt}px` }}
        className="container-sm align-center shadow shadow-lg"
      >
        <img
          alt="alt"
          style={{ width: "150px", height: "150px", marginLeft: "20%" }}
          src={hello}
        ></img>
        <div className=" container-sm my-1 text-center ">
          <h5 className="my-2">Login to continue..</h5>
          <div className={style.inputdiv}>
            {/* <span>Please enter the correct details..</span> */}
            {error && (
              <div className={style.errordiv}>
                <span>Emp id is not valid</span>
              </div>
            )}
            {/* <input
              className={style.inputfield}
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={handlename}
              id="name"
            /> */}
            <input
              className={style.inputfield}
              type="text"
              placeholder="Enter your empid"
              id="empid"
              onChange={handleempid}
              value={empid}
            />
            {startverifying && (
              <div className={style.loadingdiv}>
                {verified ? (
                  <button>Continue</button>
                ) : (
                  <>
                    <div
                      className="spinner-border spinner-border-sm text-primary mt-1 me-1"
                      role="status"
                    ></div>
                    <span>Verifying..</span>
                  </>
                )}
              </div>
            )}

            {/* <button>Continue</button> */}
          </div>

          <h6>Or</h6>
          <button
            onClick={handlelogin}
            className="my-2"
            style={{ border: "none" }}
          >
            <img
              alt="googlesign.png"
              src={g}
              style={{ width: "20px", height: "20px" }}
            />
            <span className="mx-1">Sign with Google</span>
          </button>
          {/* <div class="form-floating mb-3  ">
  <input onChange={handlenamechange} type="text" class="form-control" id="floatingInput" placeholder="Name"/>
  <label for="floatingInput">Name</label>
</div> */}
          {/* <div className="mb-3"> */}
          {/* <div class="form-floating">
  <input onChange={handlephonechange} type="number" class="form-control" id="floatingPassword" placeholder="Phone number"/>
  <label for="floatingPassword">Phone number</label>
<div id="email" class="form-text">Enter valid mobile number to recive otp!</div>

</div>
</div> */}
          {/* {loading?<span class="loader"></span>:<button onClick={handlesubmit} className="btn mb-3 my-2 btn-primary">Submit</button>} */}
          <div>
            <span style={{ fontSize: "12px" }} className="mx-1">
              Terms & condition{" "}
            </span>
            <span style={{ fontSize: "12px" }} className="">
              {" "}
              |{" "}
            </span>
            <span style={{ fontSize: "12px" }} className="mx-1">
              Privacy policy
            </span>
          </div>
          <span style={{ margin: "0 auto", fontSize: "12px" }}>
            {" "}
            ©️copyright {year}
          </span>
        </div>
      </div>
    </>
  );
}
export default Loginpage;
