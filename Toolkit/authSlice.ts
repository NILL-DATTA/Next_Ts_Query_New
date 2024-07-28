import { createSlice } from "@reduxjs/toolkit";
import { Cookies } from "react-cookie";
const cookie = new Cookies();
export const authSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {
    logout(state, action) {
      cookie.remove("token");
    },
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
