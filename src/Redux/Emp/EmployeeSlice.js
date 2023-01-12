import { createSlice } from "@reduxjs/toolkit";
export const EmpSlice = createSlice({
    name:'emp',
    initialState:{
        Emplist:[],
        Empattendancelist:[],
        isemplistupdated:false
    },
    reducers:{
        Addemp:(state,action)=>{
            state.Emplist.push(action.payload)
            console.log("Emp details are pushed!");
        },
        Updateattendance:(state,action)=>{
            if(state.Empattendancelist.includes(action.payload)){
                console.log("This employee is already added..");
            }else{
            state.Empattendancelist.push(action.payload);
            console.log("Emp attendance are pushed!");
            }
        },
        Removeemployee:(state,action)=>{
            state.isemplistupdated=true
            for (let index = 0; index < state.Empattendancelist.length; index++) {
                if(state.Empattendancelist[index] !== action.payload){
                    state.Empattendancelist.push(state.Empattendancelist[index])
                }else{
                    console.log("Removed-",state.Empattendancelist[index]);
                }
                
            }
            state.isemplistupdated=false
            
        }
    }
})

export const {Addemp,Updateattendance,Removeemployee} = EmpSlice.actions;
export default EmpSlice.reducer;