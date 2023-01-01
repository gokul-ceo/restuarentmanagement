import { configureStore } from "@reduxjs/toolkit";
import global_state_slice, { menuopenSlice } from "./global_state/global_state_slice";
import orderarraySlice from "./global_state/orderarraySlice";
import MenuSlice from "./global_state/global_state_slice";
import RecivedorderArraySlice from "./global_state/RecivedorderSlice";
import VendorSlice from "./Accountsredux/vendorSlice";

export default configureStore({
    reducer:{
        orderlist:orderarraySlice,
        warn:global_state_slice,
        recivedorder:RecivedorderArraySlice,
        newvendor:VendorSlice
    }
},
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)