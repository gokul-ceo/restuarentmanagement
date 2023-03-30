import React, { useEffect, useState } from "react";
import HomeHeader from "../../homeasserts/HomeHeader";
import "./viewbillstyle.css";
import Billviewmodel from "./Billviewmodel";
import { useSelector } from "react-redux";
const server_url = "https://hsswebend-4z4hd76enq-em.a.run.app/";

function ViewBillmainpage(props) {
  const [show, setshow] = useState(false);
  const [bills, setbills] = useState([]);
  const [billno, setbillno] = useState("");
  function clickhandler(e) {
    e.preventDefault();
    console.log(e.target.value);
    setshow(true);
    // setbillno(e.target.value);
  }
  useEffect(() => {
    fetch(server_url + "admin/order/bills", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setbills(data));
  }, []);
  // const RecievedArray = useSelector(
  //   (state) => state.recivedorder.Recived_orders
  // );
  // useEffect(() => {
  //   console.log("Recived array in viewbillpage:", RecievedArray);
  // }, [RecievedArray]);
  function formatdate(datestring) {
    var date = new Date(datestring);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  }
  function formattime(datestring) {
    var date = new Date(datestring);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    return formattedTime;
  }
  return (
    <>
      <HomeHeader />
      <div style={{ width: "100%" }}>
        <table style={{ margin: "0 auto", textAlign: "left" }}>
          <thead>
            <tr>
              <th
                style={{ padding: "4px", width: "100px", fontSize: "12px" }}
                className="table_fields "
              >
                #id
              </th>
              <th
                style={{ padding: "4px", width: "100px", fontSize: "12px" }}
                className="table_fields "
              >
                Order date
              </th>
              <th
                style={{ padding: "4px", width: "100px", fontSize: "12px" }}
                className="table_fields "
              >
                Order time
              </th>
              <th
                style={{ padding: "4px", width: "100px", fontSize: "12px" }}
                className="table_fields "
              >
                Status
              </th>
              <th
                style={{ padding: "4px", width: "100px", fontSize: "12px" }}
                className="table_fields "
              >
                Payment status
              </th>
              <th
                style={{ padding: "4px", width: "100px", fontSize: "12px" }}
                className="table_fields "
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {bills?.map((bill) => (
              <tr id="billitem" className="bills">
                <td>{bill.orderid}</td>
                <td>{formatdate(bill.timestamp)}</td>
                <td>{formattime(bill.timestamp)}</td>
                <td>{bill.orderstatus}</td>
                <td>{bill.paymentstatus}</td>
                <td>
                  <button
                    style={{
                      border: "none",
                      backgroundColor: "green",
                      borderRadius: "12px",
                      color: "white",
                    }}
                    value={bill.orderid}
                    onClick={clickhandler}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Billviewmodel
        show={show}
        billno={billno}
        onHide={() => setshow(false)}
      />
    </>
  );
}

export default ViewBillmainpage;
