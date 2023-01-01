import { createSlice } from "@reduxjs/toolkit";

export const VendorSlice = createSlice({
    name:'Vendor',
    initialState:{
        addvendor:false
    },
    reducers:{
        ShowAddvendorModal:(state)=>{
            state.addvendor=true
        },
    }
})

export const {ShowAddvendorModal} = VendorSlice.actions;
export default VendorSlice.reducer;