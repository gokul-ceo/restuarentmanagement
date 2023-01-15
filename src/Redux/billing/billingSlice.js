import { createSlice } from "@reduxjs/toolkit";

export const billingSlice = createSlice({
    name:'billing',
    initialState:{
        Order_array:[]
    },
    reducers:{
        Updateorderarray:(state,action)=>{
            state.Order_array.push(action.payload)
        },
        Emptyorderarray:(state)=>{
            state.Order_array=[]
        }
    }
})

export const {Updateorderarray,Emptyorderarray} = billingSlice.actions;
export default billingSlice.reducer