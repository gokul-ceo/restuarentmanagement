import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Creditform from "./Creditform";
import Debitform from "./Debitform";
import add from "./add.png";
import minus from "./minus.png";
const server_url = "https://hsswebend-4z4hd76enq-em.a.run.app/";
function Vendorbox(props) {
  const name = props.name;
  const color = props.color;
  const balance = props.balance;
  const [show, setshow] = useState(false);
  const [billamount, setbillamount] = useState("");
  const [paidamount, setpaidamount] = useState("");
  const [billdate, setbilldate] = useState("");
  const [showbalance, setshowbalance] = useState(false);
  async function handlesave() {
    setshow(false);
    var date = billdate;
    // console.log("date-",date);
    date = date.split("-").reverse().join("/");
    // console.log();
    setbilldate(date);
    console.log("Billdate:", billdate);
    // console.log("Billamount:",billamount);
    console.log("Paidamount:", paidamount);

    if (billamount !== "" || paidamount !== "") {
      var vendordata = {
        vendorname: name,
        amount: billamount,
        paid: paidamount,
        dateofbill: date,
      };
      const requestoption = {
        method: "POST",
        headers: { "content-Type": "application/json" },
        // 'Authorization': 'Bearer '+token},
        body: JSON.stringify(vendordata),
      };
      const response = await fetch(
        `${server_url}admin/vendor/data`,
        requestoption
      );
      const data = response.json();
      console.log("DAte from response: ", data);
    }
  }
  useEffect(() => {
    if (balance === "" || balance === null || balance === undefined) {
      setshowbalance(false);
    } else {
      setshowbalance(true);
    }
  }, [balance]);
  return (
    <React.Fragment>
      <div
        style={{
          width: "340px",
          borderRadius: "10px",
          borderLeft: `10px solid ${color}`,
        }}
        className="container-sm  my-3 justify-content-between  shadow-sm "
      >
        <div
          style={{ marginLeft: "-16px" }}
          className="container-sm d-flex justify-content-between "
        >
          <h6 style={{ fontSize: "20px", marginTop: "5px" }}>{props.name}</h6>

          {show ? (
            <img
              src={minus}
              alt="add_imge"
              onClick={() => {
                setshow(!show);
              }}
              style={{
                width: "20px",
                height: "20px",
                marginTop: "15px",
                marginBottom: "15px",
              }}
            />
          ) : (
            <img
              src={add}
              alt="add_imge"
              onClick={() => {
                setshow(!show);
              }}
              style={{
                width: "20px",
                height: "20px",
                marginTop: "15px",
                marginBottom: "15px",
              }}
            />
          )}
        </div>
        {showbalance && (
          <span style={{ marginLeft: "-10px", fontSize: "13px" }}>
            Balance:{balance}
          </span>
        )}
        <div
          style={{ marginTop: "35px", marginBottom: "20px" }}
          className={
            show
              ? "container-sm w-100 d-flex justify-content-between"
              : "container-sm w-100 d-none justify-content-between"
          }
        >
          {/* <label>Enter Today's bill amount:</label>
        <input style={{"border":"none","borderBottom":"2px solid red","outline":"none"}} type="number"  /> */}
          <div className="container d-block">
            <div class="form-floating mb-2">
              <input
                type="date"
                class="form-control"
                placeholder="dd-mm-yyyy"
                id="floatingbilldate"
                onChange={(e) => setbilldate(e.target.value)}
              />
              <label for="floatingPassword">Bill date</label>
            </div>
            <div class="form-floating mb-2">
              <input
                type="Number"
                class="form-control"
                id="floatingInputbillamount"
                value={billamount}
                onChange={(e) => setbillamount(e.target.value)}
              />
              <label for="floatingInput">Today's Billamount</label>
            </div>
            <div class="form-floating mb-2">
              <input
                type="Number"
                class="form-control"
                id="floatingpaidamount"
                onChange={(e) => {
                  setpaidamount(e.target.value);
                }}
              />
              <label for="floatingInput">Paid amount</label>
            </div>
            <button onClick={handlesave} className="btn btn-primary mb-3">
              save
            </button>
          </div>

          {/* <span class="badge  text-bg-primary py-2 mx-2" onClick={handlesave}>save</span> */}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Vendorbox;
