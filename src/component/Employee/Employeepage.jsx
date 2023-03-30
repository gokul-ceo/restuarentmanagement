import React, { useEffect, useState } from "react";
import HomeHeader from "../../homeasserts/HomeHeader";
import EmployeeBox from "./Employeebox";
import search from "./search.png";
import addemp from "./addemployee.png";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import { Addemp } from "../../Redux/Emp/EmployeeSlice";
const server_url = "https://hsswebend-4z4hd76enq-em.a.run.app/";
var Emplist = [];
const User = [
  {
    id: 1,
    name: "josepc",
  },
  {
    id: 1,
    name: "senathana",
  },
  {
    id: 1,
    name: "pokikra",
  },
  {
    id: 1,
    name: "kada kumaru",
  },
  {
    id: 1,
    name: "kuppam govindhan",
  },
];
function EmployeeAddsection(props) {
  // const [show]
  var error = props.onerror;
  const [iserror, seterror] = useState(false);
  useEffect(() => {
    seterror(error);
  }, [error]);

  return (
    <>
      <Offcanvas show={props.show} onHide={props.handleclose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Manage Employees</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {iserror && (
            <div class="alert alert-danger fs-6 p-2" role="alert">
              Something went wrong :(
            </div>
          )}
          <div>
            <form onSubmit={props.submit}>
              <div className="form-floating mb-3">
                <input
                  required
                  type="text"
                  onChange={props.nameaction}
                  value={props.namevalue}
                  id="floatingnameinput"
                  placeholder="enter employee name.."
                  className="form-control"
                />
                <label htmlFor="floatingnameinput">Employee Name</label>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-floating mb-3">
                    <input
                      required
                      type="Number"
                      onChange={props.mobilaction}
                      value={props.mobilevalue}
                      id="floatingcontactinput"
                      placeholder="enter employee name.."
                      className="form-control"
                    />
                    <label htmlFor="floatingcontactinput">
                      Employee mobile
                    </label>
                  </div>
                </div>
                <div className="col">
                  <div class="form-floating">
                    <select
                      onChange={props.genderaction}
                      className="form-select"
                      id="floatingSelect"
                    >
                      <option value="0" selected>
                        select
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                    <label htmlfor="floatingSelect">Select Gender</label>
                  </div>
                </div>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={props.aadharaction}
                  value={props.aadharvalue}
                  required
                  type="Number"
                  id="floatingcontactinput"
                  placeholder="enter employee name.."
                  className="form-control"
                />
                <label htmlFor="floatingcontactinput">Employee Aadhar</label>
              </div>
              <div class="form-floating">
                <select
                  onChange={props.roleaction}
                  class="form-select"
                  id="floatingSelect"
                >
                  <option value="0" selected>
                    select
                  </option>
                  <option value="1">waiter</option>
                  <option value="2">vessle washing</option>
                  <option value="3">chief cook</option>
                  <option value="4">Asst.cook</option>
                  <option value="5">helper</option>
                </select>
                <label for="floatingSelect">select current job role</label>
                <div className="my-2">
                  <label for="empaddressTextarea1" class="form-label">
                    Employee Address
                  </label>
                  <textarea
                    onChange={props.addressaction}
                    class="form-control"
                    id="empaddressTextarea1"
                    rows="2"
                  ></textarea>
                </div>
              </div>

              <button className="btn btn-success">Add employee</button>
            </form>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Employepage() {
  const dispatch = useDispatch();
  const employeelist = useSelector((state) => state.emplist.Emplist);
  const empattendancelist = useSelector(
    (state) => state.emplist.Empattendancelist
  );
  const getupdatedemplist = useSelector(
    (state) => state.emplist.isemplistupdated
  );
  const [empname, setempname] = useState("");
  const [empmobil, setempmobil] = useState(0);
  const [empgender, setempgender] = useState("");
  const [empaadhar, setempaadhar] = useState("");
  const [emprole, setemprole] = useState("");
  const [emplist, setemplist] = useState([]);
  const [empaddress, setempaddress] = useState("");
  const [iserror, seterror] = useState(false);
  const handlenamechange = (e) => setempname(e.target.value);
  const handlemobilchange = (e) => setempmobil(e.target.value);
  const handlegenderchange = (e) => setempgender(e.target.value);
  const handleaadharchange = (e) => setempaadhar(e.target.value);
  const [searchkey, setsearchkey] = useState("");
  const [text, settext] = useState("Type to search...");
  function handledropdownclick(e) {
    if (e.target.value === 1) {
      settext("Type empid to search...");
      setsearchkey("Empid");
    } else {
      settext("Type name to search...");
      setsearchkey("Name");
    }
  }
  const handleemprole = (e) => {
    switch (Number(e.target.value)) {
      case 1:
        setemprole("waiter");
        break;
      case 2:
        setemprole("vessle washing");
        break;
      case 3:
        setemprole("chief cook");
        break;
      case 4:
        setemprole("Asst.cook");
        break;
      case 5:
        setemprole("helper");
        break;
      default:
        break;
    }
  };
  const handleempaddress = (e) => setempaddress(e.target.value);
  const [show, setshow] = useState(false);
  const [showmarkdiv, setshowmarkdiv] = useState(false);
  function handleshow() {
    setshow(!show);
  }
  const [query, setquery] = useState("");
  const [Noresult, setNoresult] = useState(false);
  function handlesearch(e) {
    var result = User.filter((user) => user.name.includes(e.target.value));
    console.log("reulst:", result);
    if (result.length === 0) {
      setNoresult(true);
    } else {
      setNoresult(false);
    }
    setquery(e.target.value);
  }
  async function handlesubmit(e) {
    e.preventDefault();
    console.log("Name:", empname);
    console.log("Mobile:", empmobil);
    console.log("Gender:", empgender);
    console.log("Employee Aadhar:", empaadhar);
    console.log("Role:", emprole);
    console.log("Employee address:", empaddress);
    var empobj = {
      name: empname,
      mobile: empmobil,
      gender: empgender,
      aadhar: empaadhar,
      role: emprole,
      address: empaddress,
    };
    const requestoption = {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(empobj),
    };
    const response = await fetch(
      server_url + "admin/employee/data?operation=add",
      requestoption
    );
    // const data =await response.json()
    if (response.status === 200) {
      setshow(false);
      seterror(false);
    } else {
      seterror(true);
    }
    // console.log("DAte from response: ",data);
    setempaadhar("");
    setempaddress("");
    setempgender("");
    setempmobil(0);
    setemprole("");
    setempname("");
  }
  useEffect(() => {
    fetch(server_url + "admin/employee/details/all", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("Result:", json);
        setemplist(json);
        dispatch(Addemp(json));
        // setemplist(json);
      });
  }, []);
  useEffect(() => {
    // console.log("Present employee:",empattendancelist);
    // dobtnclick()
    // PresentMarkingTab()
  }, [empattendancelist]);
  function PresentMarkingTab() {
    if (empattendancelist !== undefined && empattendancelist !== []) {
      switch (empattendancelist.length) {
        case 1:
          return <h6>{empattendancelist[0]}</h6>;
        case 2:
          return (
            <h6>
              {empattendancelist[0]},{empattendancelist[1]}
            </h6>
          );
        case 3:
          return (
            <h6>
              {empattendancelist[0]},{empattendancelist[1]},
              {empattendancelist[2]}
            </h6>
          );
        case 4:
          return (
            <h6>
              {empattendancelist[0]},{empattendancelist[1]},
              {empattendancelist[2]},{empattendancelist[3]}
            </h6>
          );
        default:
          return (
            <h6>
              {empattendancelist[0]},{empattendancelist[1]},
              {empattendancelist[2]},{empattendancelist[3]}..{" "}
              {empattendancelist.length - 4}more
            </h6>
          );
      }
      // console.log("Employee list length:",empattendancelist.length);
      // empattendancelist.forEach(element => {
      //     console.log("Present employee:",element);
      // });
    }
  }
  // useEffect(()=>{
  //     // console.log("Employee list in reducer:",employeelist);
  //     if(employeelist[0]===undefined){
  //         // console.log("Employeelist is undefined..");
  //     }else{
  //         employeelist[0].forEach(element => {
  //             // console.log("Seperate elemenet in employeelist reducer:",element);
  //         });
  //     }
  // },[employeelist])
  // console.log('Resspose:',emploees.filter(user=>user.Empname.includes('t')));
  function dobtnclick() {
    var btn = document.getElementById("canvasbtn");
    btn.click();
  }
  useEffect(() => {
    if (empattendancelist.length === 0) {
      setshowmarkdiv(false);
    } else {
      setshowmarkdiv(true);
    }
  }, [empattendancelist]);
  useEffect(() => {
    if (empattendancelist.length === 0) {
      setshowmarkdiv(false);
    } else {
      setshowmarkdiv(true);
    }
  }, [empattendancelist.length, getupdatedemplist]);
  return (
    <>
      <HomeHeader />
      <div className="container">
        <div className="row">
          <div className="col w-75">
            <div className="container w-100">
              <div className="input-group mx-auto my-2 mb-3 w-100">
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
                <ul className="dropdown-menu dropdown-menu-end">
                  <li
                    onClick={handledropdownclick}
                    value="0"
                    className="dropdown-item"
                  >
                    Name
                  </li>
                  <li
                    onClick={handledropdownclick}
                    value="1"
                    className="dropdown-item"
                  >
                    Empid
                  </li>
                  {/* <li className="dropdown-item">Something else here</li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-2 text-center p-2 me-1 ">
            <button
              className="btn border-dark"
              onClick={handleshow}
              type="button"
            >
              <img
                alt="option"
                style={{ width: "20px", height: "20px" }}
                src={addemp}
              />
            </button>
          </div>
        </div>
      </div>
      <hr className="my-0" />
      {/* <SearchBar action={handlesearch} /> */}
      {employeelist[0] === undefined
        ? null
        : employeelist[0]
            .filter((user) => user.Empname.toLowerCase().includes(query))
            .map((user) => (
              <EmployeeBox gender={user.Empgender} name={user.Empname} />
            ))}
      {/* {Noresult && <div class="alert alert-danger my-1" role="alert">
        No result found..
        </div>} */}
      <EmployeeAddsection
        onerror={iserror}
        submit={handlesubmit}
        namevalue={empname}
        mobilevalue={empmobil}
        gendervalue={empgender}
        aadharvalue={empaadhar}
        rolevalue={emprole}
        addressvalue={empaddress}
        nameaction={handlenamechange}
        mobilaction={handlemobilchange}
        genderaction={handlegenderchange}
        aadharaction={handleaadharchange}
        roleaction={handleemprole}
        addressaction={handleempaddress}
        show={show}
        handleclose={handleshow}
      />
      {/* {User.filter((user)=>user.Name)} */}
      {/* <div style={{'bottom':'0','position':'fixed','width':'100%'}} className="container border-success shadow-lg align-bottom mb-2 p-2">
        <button className="btn btn-success">Save</button>
    </div> */}
    </>
  );
}

export default Employepage;
