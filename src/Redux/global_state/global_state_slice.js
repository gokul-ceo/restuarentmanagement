import { createSlice } from "@reduxjs/toolkit";

export const menuopenSlice = createSlice({
    name:'sidediv_status',
    initialState:{
        value:false,
        warning:false
    },
    reducers:{
        should_show : state=>  {
            state.value = !state.value
        },
        server_warning:(state)=>{
            if(state.warning){
                state.warning=false
            }else{
                state.warning=true
            }
        }
    }
})

export const {should_show,server_warning} = menuopenSlice.actions
export default menuopenSlice.reducer