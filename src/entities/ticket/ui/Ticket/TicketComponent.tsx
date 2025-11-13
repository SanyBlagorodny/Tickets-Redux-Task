import "./TicketComponent.scss";
import type { FC } from "react";
import type { ITicketData } from "@entities/ticket/model/types.ts";
import pobedaLogo from "@shared/assets/svg/pobeda.svg";
import redWingsLogo from "@shared/assets/svg/red-wings.svg";
import s7Logo from "@shared/assets/svg/s7-airlines.svg";
export const TicketComponent: FC<ITicketData> = ({
  price,
  currency,
  company,
  from,
  to,
  time,
  duration,
  connections,
}) => {
  const { startTime, endTime } = time;
  const getConnectionsText = () => {
    switch (connections) {
      case 0:
        return "Без пересадок";
      case 1:
        return "1 пересадка";
      case 2:
        return "2 пересадки";
      case 3:
        return "3 пересадки";
    }
  };
  const getCompanyImg = () => {
    switch (company) {
      case "Pobeda":
        return pobedaLogo;
      case "S7 Airlines":
        return s7Logo;
      case "Red Wings":
        return redWingsLogo;
    }
  };
  const getDuration = () => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return hours > 0 ? `${hours} ч ${minutes} мин` : `${minutes} мин`;
  };

  const getCurrency = () => {
    return currency === "RUB" ? "Р" : "";
  };
  return (
    <div className={"Ticket"}>
      <div className={"Ticket__header"}>
        <p className={"Ticket__price"}>
          {price} {getCurrency()}
        </p>
        <div className={"Ticket__company"}>
          <img src={getCompanyImg()} alt={company} />
        </div>
      </div>
      <div className={"Ticket__footer"}>
        <div className={"Ticket__details"}>
          <p
            className={"Ticket__details__text Ticket__details__text--lavender"}
          >
            {from} - {to}
          </p>
          <p className={"Ticket__details__text Ticket__details__text--purple"}>
            {startTime} - {endTime}
          </p>
        </div>
        <div className={"Ticket__details"}>
          <p
            className={"Ticket__details__text Ticket__details__text--lavender"}
          >
            В пути
          </p>
          <p className={"Ticket__details__text Ticket__details__text--purple"}>
            {getDuration()}
          </p>
        </div>
        <div className={"Ticket__details"}>
          <p
            className={"Ticket__details__text Ticket__details__text--lavender"}
          >
            Пересадки
          </p>
          <p className={"Ticket__details__text Ticket__details__text--purple"}>
            {getConnectionsText()}
          </p>
        </div>
      </div>
    </div>
  );
};
