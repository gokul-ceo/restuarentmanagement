import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const server_url = "https://hsswebend-4z4hd76enq-em.a.run.app/";
const style = {
  recentdiv: {
    height: "20rem",
    width: "328px",
    backgroundColor: "#EEEEEE",
    borderRadius: "22px",
    marginTop: "20px",
    overflow: "auto",
  },
  anchor: {
    textDecoration: "none",
    color: "inherit",
    margin: "4px",
    fontFamily: "Roboto,sans-serif",
    fontSize: "12px",
    fontWeight: "bold",
    // eslint-disable-next-line no-dupe-keys
    color: "#FFFFFF",
  },
};

function RecentBills() {
  const [recentbills, setrecentbills] = useState([]);

  useEffect(() => {
    fetch(server_url + "admin/vendor/recentbills", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Recentbills:", data);
        setrecentbills(data);
      });
  }, []);
  return (
    <React.Fragment>
      <div style={style.recentdiv} className="container">
        <div
          style={{ backgroundColor: "#EEEEEE" }}
          className="container-sm py-2 sticky-top d-flex justify-content-between"
        >
          <span
            style={{
              fontFamily: "Roboto,sans-serif",
              fontSize: "17px",
              fontWeight: "bold",
              color: "#FF616D",
            }}
          >
            Recent Invoices
          </span>
          {/* <div style={{width:'100px',height:'16px',borderRadius:'10px',backgroundColor:'#FF616D'}} className='my-1'>
      <h2 style={{fontSize:'12px'}}><a href='...' style={style.anchor}>View Invoices</a></h2>
    </div> */}
        </div>
        <table className="table">
          <thead>
            <tr>
              {/* <th scope="col">#</th> */}
              <th scope="col">Name</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {recentbills?.map((vendors, i) => {
              return (
                <tr key={i}>
                  <th>{vendors.Vendorname}</th>
                  <td>{vendors.Paidamout}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div
          style={{
            height: "3.5rem",
            backgroundColor: "#EEEEEE",
            // bottom: "-100",
            marginTop: "200px",
            // position: "absolute",
          }}
          className="sticky-bottom"
        >
          <button
            style={{
              borderRadius: "12px",
              fontWeight: "bold",
              width: "10rem",
              border: "none",
              backgroundColor: "#FF616D",
              color: "white",
              margin: "1rem 2rem 0 4.5rem",
            }}
          >
            View Invoices
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
export default RecentBills;
