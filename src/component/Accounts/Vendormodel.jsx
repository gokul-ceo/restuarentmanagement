import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ShowAddvendorModal } from "../../Redux/Accountsredux/vendorSlice";
import { useDispatch, useSelector } from "react-redux";
const server_url = "https://hsswebend-4z4hd76enq-em.a.run.app/";
function Vendormodel(props) {
  const dispatch = useDispatch();
  const modelstate = useSelector((state) => state.newvendor.addvendor);
  const [showbalance, setshowbalance] = useState(false);
  const [vendorname, setvendorname] = useState("");
  const [isloading, setloading] = useState(false);
  const [balance, setbalance] = useState(0);
  function handletoggle() {
    setshowbalance(!showbalance);
    setbalance(0);
  }
  function handleinputchange(e) {
    setvendorname(e.target.value);
  }
  async function handlesave() {
    dispatch(ShowAddvendorModal());
    if (vendorname !== "") {
      const vendorobj = {
        Vendorname: vendorname,
        Balance: balance,
        Addedat: Date.now(),
      };
      const requestoption = {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(vendorobj),
      };
      const response = await fetch(
        server_url + "admin/vendor/add",
        requestoption
      );
      const data = await response.json();
      console.log("response: ", data);
    }
  }
  useEffect(() => {
    setvendorname("");
    setbalance(0);
    setshowbalance(false);
  }, [modelstate]);
  return (
    <Modal
      {...props}
      size="lg"
      backdrop="static"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{ backgroundColor: "#FF616D" }}>
        <Modal.Title id="contained-modal-title-vcenter">Add vendor</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label htmlFor="vendroname">Enter the vendor name</label>
        <input
          id="vendorname"
          style={{
            border: "none",
            outline: "none",
            borderBottom: "1px solid black",
            marginTop: "15px",
          }}
          onChange={handleinputchange}
          value={vendorname}
          type="text"
        />
        <div class="form-check form-switch my-3">
          <input
            class="form-check-input"
            onChange={handletoggle}
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label class="form-check-label" for="flexSwitchCheckDefault">
            Balance
          </label>
        </div>
        {showbalance && (
          <input
            class="form-control"
            type="Number"
            onChange={(e) => {
              setbalance(e.target.value);
            }}
            value={balance}
            placeholder="Add balance.."
            aria-label="default input example"
          ></input>
        )}
      </Modal.Body>
      <Modal.Footer style={{ borderBottom: "10px solid #FF616D" }}>
        <button className="btn btn-outline-success" onClick={handlesave}>
          Save
        </button>
        {/* <button style={{'borderRadius':'20px','backgroundColor':"green",'border':"none"}} onClick={props.onHide}>Add</button>
         */}
        {/* <button style={{'borderRadius':'20px','backgroundColor':"#FF616D",'border':"none"}} onClick={props.onHide}>Close</button> */}
      </Modal.Footer>
    </Modal>
  );
}

export default Vendormodel;
