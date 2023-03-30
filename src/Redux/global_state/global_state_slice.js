import { createSlice } from "@reduxjs/toolkit";

export const menuopenSlice = createSlice({
  name: "sidediv_status",
  initialState: {
    value: false,
    warning: false,
    token: "",
    Role: "",
  },
  reducers: {
    should_show: (state) => {
      state.value = !state.value;
    },
    server_warning: (state) => {
      if (state.warning) {
        state.warning = false;
      } else {
        state.warning = true;
      }
    },
    setToken: (state, action) => {
      state.token = action.payload;
      console.log("Token has been set!");
    },
    Assign_Role: (state, action) => {
      state.Role = action.payload;
    },
  },
});

export const { should_show, server_warning, setToken, Assign_Role } =
  menuopenSlice.actions;
export default menuopenSlice.reducer;
