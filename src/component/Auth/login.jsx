import React from "react";
import hello from './hello.gif'
var date = new Date()
var year =  date.getFullYear()
function Loginpage(){
    var mt = window.innerHeight/6
    return <>
    <div style={{'width':'300px','marginTop':`${mt}px`}} className="container-sm align-center shadow shadow-lg">
    <img alt="alt" style={{'width':'150px','height':'150px','marginLeft':'20%'}} src={hello}></img>
        <div className=" container-sm my-1 text-center ">
            <h5 className="my-2">Login to continue..</h5>
        <div class="form-floating mb-3  ">
  <input type="text" class="form-control" id="floatingInput" placeholder="Name"/>
  <label for="floatingInput">Name</label>
</div>
<div className="mb-3">
<div class="form-floating">
  <input type="number" class="form-control" id="floatingPassword" placeholder="Phone number"/>
  <label for="floatingPassword">Phone number</label>
<div id="email" class="form-text">Enter valid mobile number to recive otp!</div>

</div>
</div>
<button className="btn mb-3 my-2 btn-primary">Submit</button>
<div>
    <span  style={{'fontSize':'12px'}} className="mx-1">Terms & condition </span>
    <span style={{'fontSize':'12px'}} className=""> | </span>
    <span style={{'fontSize':'12px'}} className="mx-1">Privacy policy</span>
</div>
<span style={{'margin':'0 auto','fontSize':'12px'}}> ©️copyright {year}</span>
        </div>
    </div>
    </>
}
export default Loginpage;