import { useSelect } from "@mui/base";
import React, { Fragment, useEffect, useState } from "react";
import socket, { ordersocket } from "../context/socket";
import { useDispatch, useSelector } from "react-redux";
import { Cancel_order } from "../Redux/global_state/RecivedorderSlice";
const server_url = "http://localhost:4000/";
var currentorder = [];
function ORderdiv(props) {
  const [seen, setseen] = useState(false);
  const role = useSelector((state) => state.Gstate.role);
  const [canceled, setcanceled] = useState(false);
  const [orderid, setorderid] = useState("");
  const [orderitemlist, setorderitemlist] = useState([]);
  console.log("Order id recivedd by orderdiv: ", props.orderid);
  const dispatch = useDispatch();

  function Cancelorder(e) {
    e.preventDefault();
    fetch(`${server_url}cancel?orderid=${orderid}&from=${role}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.status === 200) {
        setcanceled(true);
        dispatch(Cancel_order(orderid));
      } else {
        setcanceled(false);
      }
    });
  }
  function Notifycustomer() {
    console.log("Notify orderid:", orderid);
    fetch(`${server_url}admin/order/customer/notify?orderid=${orderid}`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  function handleorder() {
    fetch(`${server_url}orderdetails/${props.orderid}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        // setMenulist(json);
        console.log(`ORder details of orderid-${props.orderid}:`, json);
        setorderid(json[0].Orderid);
        setorderitemlist(json);
      });
  }
  useEffect(() => {
    setseen(true);
    // console.log("Sending the seen infor...");

    socket.emit("seen_info", orderid, () => {
      console.log("Seen info has been sent..");
    });
  }, [orderid]);
  useEffect(() => {
    fetch(`${server_url}orderdetails/${props.orderid}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        // setMenulist(json);
        console.log(`ORder details of orderid-${props.orderid}:`, json);
        setorderid(json[0].Orderid);
        setorderitemlist(json);
      });
  }, [props.orderid]);

  return (
    <Fragment>
      <div
        style={{
          border: "3px solid #FF616D",
          width: "97%",
          borderRadius: "5px",
        }}
        className="container shadow p-3 mb-5 "
      >
        <div>
          <div className="d-flex justify-content-between">
            <h4>Table no:2</h4>
            <button
              onClick={handleorder}
              style={{
                border: "none",
                backgroundColor: "#FF616D",
                borderRadius: "5px",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Get order!
            </button>
            <button
              onClick={Notifycustomer}
              style={{
                border: "none",
                backgroundColor: "#FF616D",
                borderRadius: "5px",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Notify!
            </button>
          </div>
          <h6>Orders-id - {orderid}</h6>
        </div>

        <ol class="list-group my-1 list-group-numbered">
          {orderitemlist?.map((item) => {
            return (
              <>
                <li class="list-item">
                  {item.Name}-{item.Quantity}
                </li>
              </>
            );
          })}
        </ol>
        {/* 
                <li class="list-group-item">A list item</li>
                <li class="list-group-item">A list item</li>
                <li class="list-group-item">A list item</li>
             */}
        {canceled ? (
          <span className="text-danger">
            This order has been cancelled by you.
          </span>
        ) : (
          <button onClick={Cancelorder} style={{ border: "1px solid red" }}>
            Cancel order
          </button>
        )}
      </div>
    </Fragment>
  );
}

export default ORderdiv;
