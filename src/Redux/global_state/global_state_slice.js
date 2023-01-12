import { createSlice } from "@reduxjs/toolkit";

export const menuopenSlice = createSlice({
    name:'sidediv_status',
    initialState:{
        value:false,
        warning:false,
        token:''
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
        },
        setToken:(state,action)=>{
            state.token = action.payload
            console.log("Token has been set!");
        }
    }
})

export const {should_show,server_warning,setToken} = menuopenSlice.actions
export default menuopenSlice.reducer