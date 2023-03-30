import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatearray } from "../../Redux/global_state/orderarraySlice";
import { update_available_item } from "../../Redux/global_state/MenuSlice";
import camicon from "./cam.svg";
// import socket from "../context/socket";
import socket from "../../context/socket";
import { Socket } from "socket.io-client";
import warningimg from "./warning.png";
const server_url = "https://hsswebend-4z4hd76enq-em.a.run.app/";
// import './itembox.css'

// const starttest = async ()=>{
//     try{
//         console.log("starttest exevuting");
//         const response = await fetch('http://localhost:4000/menulist/',{
//             method:'GET'
//         });
//         console.log("Response: ",response.json);
//     } catch(error){
//         console.log(error);
//     }
// }
function ItemBox(props) {
  const Name = props.name;
  const id_ = props.key_;
  const itemprice = props.price;
  const itemquantity = props.quantity;
  const [check, setcheck] = useState(null);
  const [checkdb, setcheckdb] = useState("Not available");
  const [price, setprice] = useState(0);
  const [quantity, setquantity] = useState(0);
  const [statuscolor, setstatuscolor] = useState("red");
  const [error, seterror] = useState(false);
  const [isloading, setloading] = useState(false);
  const [showupdate, setshowupdate] = useState(false);
  const [image, setimage] = useState(null);
  const [img_upload_status, setimg_upload_status] = useState(false);
  const dispatch = useDispatch();
  // const list = useSelector((state)=>state.Menu.availableitems)
  const [selecteditem, setselecteditem] = useState({
    Item: "",
    Available: false,
  });
  // const warning = useSelector((state)=>state.warn.warning)                       this work's fine.... may be used in  future
  // const[warning,setwarning] = useState(false)
  // const serverwarning = useSelector((state)=>state.warn.warning)
  // useEffect(()=>{
  //     // console.log("This working warning!@!");
  //     // setwarning(true)
  //     if(serverwarning === true){
  //         setwarning(true)
  //     console.log("This working warning!@!");
  //     }
  // },[serverwarning])

  // socket.emit('updateitem','testing updateitem')
  function handleimagechange(e) {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setimage(file);
      console.log("Image is selected");
      console.log(file);
    } else {
      setimage(null);
      alert("Please select a valid image file.");
    }
  }

  function handleiconselect() {
    // fileInputRef.current.Click();
    var input = document.getElementById(`menuimage_${id_}`);
    input.click();
  }
  function handleclick(e) {
    setshowupdate(true);

    if (check) {
      setcheck(false);
      setselecteditem({ Item: Name, Available: false });
      setcheckdb("Not available");
      setstatuscolor("red");
    } else {
      setcheck(true);
      setselecteditem({
        Item: Name,
        Available: true,
        Price: price,
        Quantity: quantity,
      });
      setcheckdb("Available");
      setstatuscolor("green");
    }
    seterror(false);

    // }

    //    useEffect(()=>{
    //     if(check===true){
    //         setcheck(true)
    //         setcheckdb("Available")
    //         setstatuscolor('green')
    //     }
    //    },[warning])
    // dispatch(update_available_item(Name))
    // var message = 'testing this event'
    // socket.emit("changethisitem",'testing')
    // dispatch(updatearray(Name))
    // starttest()

    // var name=props.name
    // console.log("value: ",name);
  }
  async function uploadimage(e) {
    e.preventDefault();
    if (image) {
      const formdata = new FormData();
      formdata.append("image", image);
      const response = await fetch(`${server_url}menu_image/upload`, {
        method: "POST",
        body: formdata,
      });
      if (response.ok) {
        console.log("Image Uploaded successfully");
        setimg_upload_status(true);
      } else {
        console.log("Image has been not uploaded!");
      }
    } else {
      console.log("Please select any image to upload!");
    }
  }
  async function postdata(e) {
    e.preventDefault();
    console.log("Seleteditem: ", selecteditem);
    console.log("status of selecteditem");
    if (
      price === null ||
      price === undefined ||
      price === "" ||
      price === 0 ||
      quantity === null ||
      quantity === undefined ||
      quantity === "" ||
      quantity === 0
    ) {
      seterror(true);
    } else if (check !== null && selecteditem.Item !== "") {
      setloading(true);
      const requestoption = {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(selecteditem),
      };
      await fetch(server_url + "admin/Menu/changethisitem", requestoption).then(
        async (response) => {
          if (response.ok) {
            console.log("Updated successfully");
          }
        }
      );
      // console.log("DAte from response: ",data);
    }
    setshowupdate(false);
    console.log("it reaches here!...");
  }
  useEffect(() => {
    // setcheck(true)
    if (props.status === true) {
      setcheck(true);
      setcheckdb("Available");
      setstatuscolor("green");
    }
    setprice(itemprice);
    setquantity(itemquantity);
  }, [props.status]);
  var time = new Date(props.lastupdate).toLocaleString("en-GB");
  function handlepriceedit(e) {
    // console.log(e.target.value);\
    setshowupdate(true);
    setcheck(false);
    setcheckdb("Not available");
    setstatuscolor("red");
    setprice(Number(e.target.value));
    seterror(false);
    // setselecteditem(...selecteditem,)
    // console.log("its working!!");
  }
  function handlequantityedit(e) {
    setshowupdate(true);
    setcheck(false);
    setcheckdb("Not available");
    setstatuscolor("red");
    setquantity(Number(e.target.value));
    seterror(false);
  }
  // var status = props.status===true?'green':'red';

  return (
    <React.Fragment>
      <div
        style={{ width: "350px", position: "relative" }}
        className="container-sm shadow border-bottom  p-3 mb-2 rounded"
      >
        <div
          className="container-sm d-flex justify-content-between"
          onClick={handleclick}
        >
          <span>{props.name}</span>
          <span
            style={{
              fontSize: "10px",
              fontWeight: "bolder",
              color: statuscolor,
            }}
            className="ms-auto px-2 mt-1"
          >
            {checkdb}
          </span>
          <input
            className="custome-control-input"
            type="checkbox"
            value={props.name}
            checked={check}
            readOnly
          />
        </div>
        <div style={{ zIndex: "1" }} class="input-group my-2">
          <span class="input-group-text fs-6">Price & Quantity</span>
          <input
            type="Number"
            className="fs-6"
            aria-label="First name"
            value={price}
            onChange={handlepriceedit}
            class="form-control"
          />
          <input
            type="Number"
            className="fs-6"
            aria-label="Last name"
            value={quantity}
            onChange={handlequantityedit}
            class="form-control"
          />
        </div>
        <span
          style={{ fontSize: "10px", display: "block" }}
          className="text-muted"
        >
          Last updated at {time}
        </span>
        {error && (
          <h6 style={{ fontSize: "10px" }} className="text-danger mt-2">
            <img
              alt="warning_img"
              src={warningimg}
              style={{ fontSize: "12px", width: "20px", height: "20px" }}
            />
            Enter the valid quantity and price!
          </h6>
        )}
        {showupdate && (
          <button
            // disabled={!image}
            className="my-2"
            onClick={postdata}
            style={{
              borderRadius: "12px",
              border: "1px solid green",
              backgroundColor: "white",
              color: "green",
              fontWeight: "bold",
            }}
          >
            Update
          </button>
        )}
        <div
          style={{
            width: image ? "150px" : "40px",
            fontSize: "14px",
            display: "flex",
            justifyContent: "space-between",
            border: img_upload_status ? "1px solid green" : "1px solid #D32626",
            borderRadius: "12px",
            padding: "2px",
            marginTop: "5px",
            position: "relative",
            // left: showupdate && image ? "55%" : "80%",
          }}
        >
          {image && (
            <button
              onClick={uploadimage}
              style={{
                color: "#D32626",
                backgroundColor: img_upload_status ? "green" : "#D32626",
                borderRadius: "12px",
                border: "none",
                // eslint-disable-next-line no-dupe-keys
                color: "white",
                marginLeft: "0",
                width: "100px",
                padding: "0 2px 0 8px",
              }}
            >
              {img_upload_status ? "Uploaded" : "Upload image"}
            </button>
          )}
          <img
            src={camicon}
            alt="camera_icon"
            style={{
              width: "20px",
              height: "20px",
              marginLeft: "4px",
            }}
            onClick={handleiconselect}
          />
        </div>
        <input
          id={`menuimage_${id_}`}
          onChange={handleimagechange}
          type="file"
          accept="image/jpeg, image/png,image/gif, image/webp"
          style={{ display: "none" }}
        />
        {/* {image && <button onClick={uploadimage}>Upload</button>} */}
      </div>
    </React.Fragment>
  );
}

export default ItemBox;
