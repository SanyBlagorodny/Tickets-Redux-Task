import { FilterComponent } from "@features/filters/ui/Filter/FilterComponent.tsx";
import "./AsideComponent.scss";
import arrow from "@shared/assets/svg/arrow.svg";
import { FilterBy } from "@features/tickets/model/types.ts";
import { useSelector } from "react-redux";
import type { RootState } from "@app/store.ts";
import { ButtonComponent } from "@shared/ui/Button/ButtonComponent.tsx";
import { useState } from "react";
export const AsideComponent = () => {
  const { connections, company } = useSelector(
    (state: RootState) => state.ticketsReducer.filters,
  );
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const buttonText = dropdownVisible
    ? "Закрыть настройки"
    : "Открыть настройки";

  return (
    <div className={"Aside"}>
      <div className={"Aside__header"}>
        <span className={"Aside__header__text"}>
          {company.length > 0
            ? `Авиакомпания: ${company.join(", ")}, `
            : `Любая авиакомпания, `}
          {connections.length > 0
            ? ` пересадок: ${connections.join(", ")}`
            : ` любое кол-во пересадок`}
        </span>
        <ButtonComponent
          dropdownVisible={dropdownVisible}
          text={buttonText}
          imageLink={arrow}
          place={"aside"}
          onClick={() =>
            setDropdownVisible((dropdownVisible) => !dropdownVisible)
          }
        />
      </div>
      <div className={"Aside__footer--desktop"}>
        <FilterComponent filterBy={FilterBy.Company} />
        <FilterComponent filterBy={FilterBy.Connections} />
      </div>
      {dropdownVisible ? (
        <div className={"Aside__footer--mobile"}>
          <FilterComponent filterBy={FilterBy.Company} />
          <FilterComponent filterBy={FilterBy.Connections} />
        </div>
      ) : null}
    </div>
  );
};
