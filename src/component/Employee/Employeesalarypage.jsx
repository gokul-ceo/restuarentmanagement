import React, { useEffect } from "react";
import HomeHeader from "../../homeasserts/HomeHeader";
import man from "./man.png";
import woman from "./woman.png";
const server_url = "https://hsswebend-4z4hd76enq-em.a.run.app/";

function EmployeeSalaryPage() {
  useEffect(() => {
    fetch(server_url + "admin/employee/present", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("Result:", json);
        // setemplist(json)
        // dispatch(Addemp(json))
        // setemplist(json);
      });
  }, []);

  function EMPBOX(props) {
    function Viewemp() {
      var btn = document.getElementById(props.id);
      btn.click();
    }
    return (
      <>
        <div onClick={Viewemp} className="d-flex">
          <div className="p-0 mx-2">
            <img
              alt="man_image"
              src={man}
              style={{ width: "30px", height: "30px" }}
            />
          </div>
          <div style={{ marginLeft: "0" }} className="text-start  py-1">
            <span className="empname">Test employee</span>
          </div>
        </div>
        <button
          id={props.id}
          style={{ display: "none" }}
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="testemployee"
          aria-expanded="false"
          aria-controls="testemployee"
        ></button>
        <div class="collapse my-2" id="testemployee">
          <div class="card card-body">
            <div className="container d-flex justify-content-between">
              <input
                type="number"
                style={{
                  border: "none",
                  outline: "none",
                  borderBottom: "1px solid green",
                }}
                placeholder="enter salary.."
              />
              <button
                style={{
                  border: "none",
                  borderRadius: "12px",
                  backgroundColor: "green",
                  color: "white",
                  fontWeight: "bold",
                  padding: "0 20px",
                }}
              >
                save
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <HomeHeader />
      <div className="container my-3">
        <EMPBOX id={1} />
        <EMPBOX id={2} />
      </div>
    </>
  );
}

export default EmployeeSalaryPage;
