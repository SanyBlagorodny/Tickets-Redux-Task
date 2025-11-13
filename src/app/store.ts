import { configureStore } from "@reduxjs/toolkit";
import { ticketsSlice } from "@features/tickets/model/slice.ts";

export const store = configureStore({
  reducer: {
    ticketsReducer: ticketsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type RootDispatch = typeof store.dispatch;
