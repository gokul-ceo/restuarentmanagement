import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Attendance from "./Groupdiv/Attendance";
import Billing from "./Groupdiv/Billing";

function GroupDiv(){
    return  <div className="container ">
        <div className="row">
            <div className="col-6 col-sm-4">
              <Attendance/>
            </div>
            <div className="col-6 col-sm-4">
                <Billing/>
            </div>
            
        </div>
    </div>
}

export default GroupDiv;