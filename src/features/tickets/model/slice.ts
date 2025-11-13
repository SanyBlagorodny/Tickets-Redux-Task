import {
  createEntityAdapter,
  createSelector,
  createSlice,
  type PayloadAction,
  type ActionReducerMapBuilder,
  type AnyAction,
} from "@reduxjs/toolkit";
import { fetchTicketsData } from "./services/fetchTicketsData.ts";
import type { ITicketData } from "@entities/ticket/model/types.ts";
import { type SetFilterBy, SortBy, type TicketsState, FilterBy } from "./types.ts";
import type { RootState } from "@app/store.ts";
export const ticketsAdapter = createEntityAdapter<ITicketData>();
const initialState: TicketsState = {
  tickets: ticketsAdapter.getInitialState(),
  sortBy: SortBy.Price,
  filters: {
    connections: [],
    company: [],
  },
  loading: false,
  error: null,
};
export const selectAllTickets = createSelector(
  (state: RootState) => state.ticketsReducer.tickets,
  ticketsAdapter.getSelectors().selectAll,
);
export const selectFilteredSortedTickets = createSelector(
  [selectAllTickets, (state: RootState) => state.ticketsReducer],
  (tickets: ITicketData[], { sortBy, filters }: TicketsState) => {
    const filteredTickets = tickets.filter(
      (ticket: ITicketData) =>
        (filters.connections.length === 0 ||
          filters.connections.includes(ticket.connections.toString())) &&
        (filters.company.length === 0 || filters.company.includes(ticket.company)),
    );
    return filteredTickets.sort(
      (a: ITicketData, b: ITicketData) => a[sortBy as SortBy] - b[sortBy as SortBy],
    );
  },
);
export const ticketsSlice = createSlice({
  name: "ticketsSlice",
  initialState: initialState,
  reducers: {
    setSortBy: (state: TicketsState, action: PayloadAction<SortBy>) => {
      state.sortBy = action.payload;
    },
    setFilterBy: (state: TicketsState, action: PayloadAction<SetFilterBy>) => {
      const { filterBy, id, checked } = action.payload;
      if (filterBy === FilterBy.Company) {
        state.filters.company = checked ? [id] : [];
        return;
      }
      const key = filterBy as keyof TicketsState["filters"];
      const current: string[] = state.filters[key];
      if (checked) {
        if (!current.includes(id)) {
          current.push(id);
        }
      } else {
        state.filters[key] = current.filter((item: string) => item !== id);
      }
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<TicketsState>) => {
    builder
      .addCase(fetchTicketsData.pending, (state: TicketsState) => {
        state.loading = true;
      })
      .addCase(
        fetchTicketsData.fulfilled,
        (state: TicketsState, action: PayloadAction<ITicketData[]>) => {
          ticketsAdapter.setAll(state.tickets, action.payload);
          state.loading = false;
          state.error = null;
        },
      )
      .addCase(fetchTicketsData.rejected, (state: TicketsState, action: AnyAction) => {
        state.loading = false;
        state.error = action.error.message || "Error";
      });
  },
});
export const { setSortBy, setFilterBy } = ticketsSlice.actions;
