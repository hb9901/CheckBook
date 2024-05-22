import { configureStore } from "@reduxjs/toolkit";
import expenditure from "./slices/expenditures.slice";

const store = configureStore({
  reducer: {
    expenditure,
  },
});


export default store;