import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./modules/auth/slices/authSlice";

export const store = configureStore({
  reducer: { auth: authSlice },
  devTools: true,
});
