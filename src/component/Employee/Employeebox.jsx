import React, { useEffect, useState } from "react";
import man from "./man.png";
import woman from "./woman.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import added from "./added.png";
import { useDispatch, useSelector } from "react-redux";
import {
  Removeemployee,
  Updateattendance,
} from "../../Redux/Emp/EmployeeSlice";
const server_url = "https://hsswebend-4z4hd76enq-em.a.run.app/";

function EmployeeBox(props) {
  const Name = props.name;
  const [gender, setgender] = useState("");
  const [add, setadd] = useState(false);
  const [verify, setverify] = useState(false);
  const dispatch = useDispatch();
  function VerificationMode(props) {
    async function handleyes() {
      const requestoption = {
        method: "POST",
        headers: { "content-Type": "application/json" },
      };
      const response = await fetch(
        `${server_url}admin/employee/data?operation=update&empname=${Name}`,
        requestoption
      );
      if (response.status === 200) {
        setadd(true);
        props.onHide();
      }
    }
    return (
      <>
        <Modal
          {...props}
          size="sm"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          {/* <Modal.Header closeButton>
        {/* <Modal.Title id="contained-modal-title-vcenter">
          Do you 
        </Modal.Title> */}
          {/* </Modal.Header> */}
          <Modal.Body>
            <h4>Do you want to mark {props.name} ?</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn btn-success" onClick={handleyes}>
              Yes
            </Button>
            <Button className="btn btn-danger" onClick={props.onHide}>
              No
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  function handleadd() {
    // setadd(!add)
    setverify(true);
  }
  useEffect(() => {
    if (add) {
      dispatch(Updateattendance(props.name));
    } else {
      // dispatch(Removeemployee(props.name))
    }
  }, [add]);
  useEffect(() => {
    setgender(props.gender);
  }, [props.gender]);
  return (
    <>
      <div
        className="container my-3"
        style={add ? { borderLeft: "5px solid green" } : null}
        onClick={handleadd}
      >
        <div className="row">
          <div className="col-2">
            <img
              alt="man_image"
              src={gender === "Male" ? man : woman}
              style={{ width: "30px", height: "30px" }}
            />
          </div>
          <div className="col-8   py-1">
            <span className="empname">{props.name}</span>
          </div>
          <div className="col py-1 ">
            {add && (
              <img
                alt="man_image"
                src={added}
                style={{ width: "20px", height: "20px" }}
              />
            )}
          </div>
        </div>
      </div>
      <VerificationMode
        show={verify}
        name={props.name}
        onHide={() => setverify(false)}
      />
    </>
  );
}
export default EmployeeBox;
