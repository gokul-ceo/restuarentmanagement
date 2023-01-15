import React from "react";
import hello from './hello.gif'
function Loginpage(){
    var mt = window.innerHeight/6
    return <>
    <div style={{'width':'300px','marginTop':`${mt}px`}} className="container-sm align-center shadow shadow-lg">
    <img alt="alt" style={{'width':'200px','height':'200px','marginLeft':'15%'}} src={hello}></img>
        <div className=" container-sm my-1 text-center ">
            <h3 className="my-1">Login</h3>
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
<button className="btn mb-5 btn-primary">Submit</button>

        </div>
    </div>
    </>
}
export default Loginpage;