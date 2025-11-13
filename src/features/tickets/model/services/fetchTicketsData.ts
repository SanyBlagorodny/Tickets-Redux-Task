import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ITicketData } from "@entities/ticket/model/types.ts";
export const fetchTicketsData = createAsyncThunk<ITicketData[]>(
  "tickets/fetchTicketsData",
  async () => {
    const url = new URL("../../../../shared/api/ticketsData.json", import.meta.url);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error");
    }
    const data: ITicketData[] = await response.json();
    return data;
  },
);

