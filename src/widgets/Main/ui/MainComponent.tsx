import "./MainComponent.scss";
import { AsideComponent } from "@widgets/Aside/ui/AsideComponent.tsx";
import { ButtonComponent } from "@shared/ui/Button/ButtonComponent.tsx";
import { selectFilteredSortedTickets, selectLoading, selectError, setSortBy } from "@features/tickets/model/slice.ts";
import { SortBy } from "@features/tickets/model/types.ts";
import { useEffect, useState } from "react";
import type { RootDispatch } from "@app/store.ts";
import type { ITicketData } from "@entities/ticket/model/types.ts";
import { useDispatch, useSelector } from "react-redux";
import { fetchTicketsData } from "@features/tickets/model/services/fetchTicketsData.ts";
import { TicketComponent } from "@entities/ticket/ui/Ticket/TicketComponent.tsx";
import { AnimatedList } from "@shared/ui/AnimatedList/AnimatedList.tsx";

export const MainComponent = () => {
  const dispatch: RootDispatch = useDispatch();
  const tickets = useSelector(selectFilteredSortedTickets);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const [limit, setLimit] = useState(3);
  useEffect(() => {
    dispatch(fetchTicketsData());
  }, [dispatch]);
  const handleSortBy = (value: SortBy) => {
    dispatch(setSortBy(value));
  };
  const handleAdd = () => {
    setLimit((prevLimit: number) => prevLimit + 3);
  };
  const selectedTickets: ITicketData[] = tickets.slice(0, limit);
  
  if (loading) return <div className="Main__loading">Загрузка...</div>;
  if (error) return <div className="Main__error">Ошибка: {error}</div>;
  
  const handleTicketSelect = () => {
    // TODO: Добавить обработку выбора билета
  };
  
  const renderTicket = (ticket: ITicketData) => {
    return (
      <TicketComponent
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
    );
  };
  return (
    <div className={"Main"}>
      <div className={"Main__aside-desktop"}>
        <AsideComponent />
      </div>
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
        <div className={"Main__aside-mobile"}>
          <AsideComponent />
        </div>
        <AnimatedList
          items={selectedTickets}
          onItemSelect={handleTicketSelect}
          renderItem={renderTicket}
          showGradients={true}
          enableArrowNavigation={true}
          displayScrollbar={true}
        />
        {selectedTickets.length < tickets.length && (
          <ButtonComponent
            text={"Загрузить ещё билеты"}
            place={"footer"}
            onClick={handleAdd}
          />
        )}
      </div>
    </div>
  );
};
