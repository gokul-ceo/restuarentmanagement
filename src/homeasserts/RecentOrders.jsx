import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
// import socket from "/src/RecentOrders/socket.js";
import socket from "../context/socket";
import { useDispatch } from "react-redux";
import { Update_recived_order } from "../Redux/global_state/RecivedorderSlice";
const server_url = "https://hsswebend-4z4hd76enq-em.a.run.app/";
var orderidlist = [];
const style = {
  div: {
    backgroundColor: "#E3E3E3",
    borderRadius: "22px",
    height: "175px",
    width: "332px",
  },
  anchor: {
    textDecoration: "none",
    color: "inherit",
    margin: "4px",
    fontFamily: "Roboto,sans-serif",
    fontSize: "12px",
    fontWeight: "bold",
    //eslint-disable-next-line
    color: "white",
  },
};

function RecentOrders() {
  const dispatch = useDispatch();
  const [Recentorderslist, setrecentorderslist] = useState([]);
  socket.on("neworder", (orders) => {
    dispatch(Update_recived_order(orders));
    // console.log("New order from server:", orders.orderid);
    // if (orderidlist.includes(orders.orderid)) {
    //   console.log("Already added!");
    // } else {
    //   setrecentorderslist((Recentorderslist) => [...Recentorderslist, orders]);
    // }
  });
  useEffect(() => {
    fetch(`${server_url}admin/order/recentorders`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setrecentorderslist(json);
        json.forEach((element) => {
          orderidlist.push(element.orderid);
        });
        console.log("Recentorderlist:", orderidlist);
      });
  }, []);
  useEffect(() => {
    socket.on("orders", (orderlist) => {
      dispatch(Update_recived_order(orderlist));
    });
  }, []);

  function Recentorderbox(props) {
    const [timeAgo, settimeAgo] = useState("");
    useEffect(() => {
      var timeago = props.timestring;
      var Now = Date.now();
      timeago = new Date(timeago).getMinutes();
      var currentminutes = new Date(Now).getMinutes();
      if (timeago === currentminutes) {
        var timeagos = new Date(timeago).getSeconds();
        var currentseconds = new Date(Now).getSeconds();
        var seconds = currentseconds - timeagos;
        settimeAgo(seconds + "s");
      } else {
        settimeAgo(currentminutes - timeago + "m");
      }
    }, [props.timestring]);

    return (
      <>
        <div
          style={{ borderRadius: "12px", backgroundColor: "lightgray" }}
          className="d-flex my-1 p-1 justify-content-between"
        >
          <span>OrderId - {props.orderid}</span>
          <span>Dine-In</span>
          <span
            className="text-muted"
            style={{ fontSize: "12px", marginTop: "3px" }}
          >
            {timeAgo}
          </span>
        </div>
      </>
    );
  }
  return (
    <React.Fragment>
      <div
        style={style.div}
        className="container-sm overflow-auto container-md my-3"
      >
        <div
          style={{ backgroundColor: "#E3E3E3" }}
          className="container-sm d-flex sticky-top justify-content-between"
        >
          <span
            style={{
              fontFamily: "Roboto,sans-serif",
              fontSize: "17px",
              fontWeight: "bold",
              color: "#FF616D",
            }}
          >
            Recent Orders
          </span>
          <div
            style={{
              width: "70px",
              height: "16px",
              borderRadius: "10px",
              backgroundColor: "#FF616D",
            }}
            className="my-1"
          >
            <h2 style={{ fontSize: "12px" }}>
              <Link to="/currentorder">
                <span style={style.anchor}>View Order</span>
              </Link>
            </h2>
          </div>
        </div>
        {Recentorderslist?.map((element) => {
          return (
            <Recentorderbox
              orderid={element.orderid}
              timestring={element.timestamp}
            />
          );
        })}

        {/* <ul>
        <li>Hss8092</li>
        <li>Hss9023</li>
        <li>Hss1021</li>
       </ul> */}
      </div>
    </React.Fragment>
  );
}

export default RecentOrders;
