import { createSlice } from "@reduxjs/toolkit";
export const RecivedorderArraySlice = createSlice({
    name:'RecivedOrders',
    initialState:{
        Recived_orders : []
    },
    reducers:{
        Update_recived_order:(state,action)=>{
            // if(!state.Recived_orders.includes(action.payload)){
            state.Recived_orders.push(action.payload)
            // }
            console.log("Recived ordera arrya: ",state.Recived_orders);
        }
    }
})
export const {Update_recived_order} = RecivedorderArraySlice.actions;
export default RecivedorderArraySlice.reducer