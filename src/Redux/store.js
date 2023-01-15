import { configureStore } from "@reduxjs/toolkit";
import global_state_slice, { menuopenSlice, setToken } from "./global_state/global_state_slice";
import orderarraySlice from "./global_state/orderarraySlice";
import MenuSlice from "./global_state/global_state_slice";
import RecivedorderArraySlice from "./global_state/RecivedorderSlice";
import VendorSlice from "./Accountsredux/vendorSlice";
import EmpSlice from "./Emp/EmployeeSlice";
import billingSlice from "./billing/billingSlice";


export default configureStore({
    reducer:{
        orderlist:orderarraySlice,
        Gstate:global_state_slice,
        recivedorder:RecivedorderArraySlice,
        newvendor:VendorSlice,
        emplist:EmpSlice,
        billing:billingSlice
    }
},
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)