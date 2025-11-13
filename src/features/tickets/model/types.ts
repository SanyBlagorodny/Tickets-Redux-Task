import type { ITicketData } from "@entities/ticket/model/types.ts";
import type { EntityState } from "@reduxjs/toolkit";

export enum SortBy {
  Price = "price",
  Duration = "duration",
  Connections = "connections",
}
export enum FilterBy {
  Connections = "connections",
  Company = "company",
}
export interface IFilters {
  connections: string[];
  company: string[];
}
export interface TicketsState {
  tickets: EntityState<ITicketData, number>;
  sortBy: SortBy;
  filters: IFilters;
  loading: boolean;
  error: null | string;
}
export interface SetFilterBy {
  filterBy: FilterBy;
  id: string;
  checked: boolean;
}
