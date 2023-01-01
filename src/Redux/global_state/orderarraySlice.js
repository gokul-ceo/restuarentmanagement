import { createSlice } from "@reduxjs/toolkit";

export const orderArraySlice = createSlice({
    name:'Available_Menu',
    initialState:{
        available_Menu:[],
        order_array:[]
    },
    reducers:{
        updatearray: (state,actions)=>{
            console.log("updatearray is responding!");
            state.order_array.push(actions.payload)
        }
    }
})

export const {updatearray} = orderArraySlice.actions;
export default orderArraySlice.reducer