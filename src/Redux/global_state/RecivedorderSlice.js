import { createSlice } from "@reduxjs/toolkit";
export const RecivedorderArraySlice = createSlice({
  name: "RecivedOrders",
  initialState: {
    Recived_orders: [],
  },
  reducers: {
    Update_recived_order: (state, action) => {
      // if(!state.Recived_orders.includes(action.payload)){
      state.Recived_orders.push(action.payload);
      // }
      console.log("Recived ordera arrya: ", state.Recived_orders);
    },
    Cancel_order: (state, action) => {
      var Index = state.Recived_orders.findIndex(
        (item) => item === action.payload
      );
      console.log("Cancel order - ", state.Recived_orders[Index]);
      var Modified_Recived_orders = [...state.Recived_orders];
      Modified_Recived_orders.splice(Index, 1);
      state.Recived_orders = Modified_Recived_orders;
    },
  },
});
export const { Update_recived_order, Cancel_order } =
  RecivedorderArraySlice.actions;
export default RecivedorderArraySlice.reducer;
