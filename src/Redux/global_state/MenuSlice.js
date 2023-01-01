import { createSlice } from "@reduxjs/toolkit";

export const MenuSlice = createSlice({
    name:'Menus',
    initialState:{
        availableitems:[]
    },
    reducers:{
        update_available_item: (state,action)=>{
            state.availableitems.push(action.payload)
        }
    }
})
export const {update_available_item} = MenuSlice.actions;
export default MenuSlice.reducer;