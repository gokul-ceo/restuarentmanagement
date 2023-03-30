import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import socket from "../../context/socket";
import search from "./search.png";
import HomeHeader from "../../homeasserts/HomeHeader";
import { server_warning } from "../../Redux/global_state/global_state_slice";
import ItemBox from "./Itembox";
import danger from "./danger.png";
const server_url = "https://hsswebend-4z4hd76enq-em.a.run.app/";
// import axios from "axios";
// axios.get('hhttp://localhost:4000/menuitems')

function EditMenu() {
  // const Available_Menus = []
  const dispatch = useDispatch();
  const [Menulist, setMenulist] = useState([]);
  const [warning, setwarning] = useState(false);
  const [query, setquery] = useState("");
  const [Noresult, setNoresult] = useState(false);
  function handlesearch(e) {
    // var result = User.filter(user=>user.name.includes(e.target.value))
    // console.log("reulst:",result);
    // if(result.length===0){
    //     setNoresult(true)
    // }else{
    //     setNoresult(false)
    // }
    setquery(e.target.value);
  }
  // const serverwarning = useSelector((state)=>state.warn.warning)
  // useEffect(()=>{
  //     // console.log("This working warning!@!");
  //     // setwarning(true)
  //     if(serverwarning === true){
  //         setwarning(true)
  //     console.log("This working warning!@!");
  //     }
  //     else{
  //         if(serverwarning!==undefined){
  //             setwarning(false)

  //         }
  //     }
  // },[serverwarning])
  // const availableitems = useSelector((state)=>state.orderlist.available_Menu)

  useEffect(() => {
    console.log("Entering for fetching!! ");
    fetch(server_url + "admin/Menu/availablemenuitems", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setMenulist(json);
        console.log("Menulist: ", json);
      });
    console.log("useeffctblock");
    socket.on("connection", (socket) => {
      socket.emit("updateitem", "Testing", () => {
        console.log("Sent successfully");
      });
    });
    socket.on("change_warning", (warning) => {
      console.log("Warning recieved from server is ", warning);
      dispatch(server_warning());
    });
  }, []);
  return (
    <React.Fragment>
      <HomeHeader />
      {warning ? (
        <React.Fragment>
          <div
            style={{ width: "350px" }}
            className="container-sm mt-2 shadow-sm p-2  rounded border border-danger"
          >
            <button
              type="button"
              style={{ colorear: "red" }}
              className="btn-close"
              onClick={() => {
                dispatch(server_warning());
              }}
              aria-label="Close"
            ></button>
            <h6
              style={{ fontSize: "15px", fontWeight: "bolder", color: "red" }}
            >
              You can't change the availability while customers are online!!{" "}
            </h6>
          </div>
        </React.Fragment>
      ) : null}

      <form>
        <div
          style={{ width: "350px", margin: "0.5rem auto 0.5rem auto" }}
          className="input-group "
        >
          <input
            onChange={handlesearch}
            value={query}
            type="text"
            class="form-control"
            placeholder="type to search.."
          />
          <button
            className="btn border-dark "
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              alt="option"
              style={{ width: "20px", height: "20px" }}
              src={search}
            />
          </button>
        </div>
        <ul className="list-group list-group-flush">
          {/* <ItemBox price={10} quantity={10} name="testing" status={true} /> */}
          {Menulist?.filter((item) =>
            item.Item.toLowerCase().includes(query)
          ).map((element, index) => {
            return (
              <ItemBox
                key_={index}
                price={element.Price}
                quantity={element.Quantity}
                name={element.Item}
                lastupdate={element.Lastupdated}
                status={element.Available}
              />
            );
          })}
        </ul>
      </form>
      {/* <button className="btn btn-danger" onClick={handlesumbit}  >Submit</button> */}
    </React.Fragment>
  );
}

export default EditMenu;
