import "./MainComponent.scss";
import { AsideComponent } from "@widgets/Aside/ui/AsideComponent.tsx";
import { ButtonComponent } from "@shared/ui/Button/ButtonComponent.tsx";
import { selectFilteredSortedTickets, setSortBy } from "@features/tickets/model/slice.ts";
import { SortBy } from "@features/tickets/model/types.ts";
import { useEffect, useState } from "react";
import type { RootDispatch } from "@app/store.ts";
import type { ITicketData } from "@entities/ticket/model/types.ts";
import { useDispatch, useSelector } from "react-redux";
import { fetchTicketsData } from "@features/tickets/model/services/fetchTicketsData.ts";
import { TicketComponent } from "@entities/ticket/ui/Ticket/TicketComponent.tsx";

export const MainComponent = () => {
  const dispatch: RootDispatch = useDispatch();
  const tickets = useSelector(selectFilteredSortedTickets);
  const [limit, setLimit] = useState(2);
  useEffect(() => {
    dispatch(fetchTicketsData());
  }, [dispatch]);
  const handleSortBy = (value: SortBy) => {
    dispatch(setSortBy(value));
  };
  const handleAdd = () => {
    setLimit((prevLimit: number) => prevLimit + 2);
  };
  const selectedTickets: ITicketData[] = tickets.slice(0, limit);
  return (
    <div className={"Tickets"}>
      <div className={"Tickets__buttons"}>
        <ButtonComponent
          sortBy={SortBy.Price}
          text={"Самый дешёвый"}
          place={"header"}
          onClick={() => handleSortBy(SortBy.Price)}
        />
        <ButtonComponent
          sortBy={SortBy.Duration}
          text={"Самый быстрый"}
          place={"header"}
          onClick={() => handleSortBy(SortBy.Duration)}
        />
        <ButtonComponent
          sortBy={SortBy.Connections}
          text={"Самый оптимальный"}
          place={"header"}
          onClick={() => handleSortBy(SortBy.Connections)}
        />
      </div>
      <AsideComponent />
      {selectedTickets.map((ticket: ITicketData) => (
        <TicketComponent
          key={ticket.id}
          id={ticket.id}
          from={ticket.from}
          to={ticket.to}
          company={ticket.company}
          price={ticket.price}
          currency={ticket.currency}
          time={ticket.time}
          duration={ticket.duration}
          date={ticket.date}
          connections={ticket.connections}
        />
      ))}
      {selectedTickets.length < tickets.length && (
        <ButtonComponent
          text={"Загрузить ещё билеты"}
          place={"footer"}
          onClick={handleAdd}
        />
      )}
    </div>
  );
};
