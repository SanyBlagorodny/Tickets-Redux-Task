import "./FilterComponent.scss";
import { FormComponent } from "../Form/FormComponent.tsx";
import { FilterBy } from "@features/tickets/model/types.ts";
import { filtersData } from "@features/filters/model/filtersData.ts";
import type { RootDispatch, RootState } from "@app/store.ts";
import { useDispatch, useSelector } from "react-redux";
import { setFilterBy } from "@features/tickets/model/slice.ts";
export interface FilterComponentProps {
  filterBy: FilterBy;
}
export const FilterComponent = ({ filterBy }: FilterComponentProps) => {
  const dispatch: RootDispatch = useDispatch();
  const { connections, company } = useSelector(
    (state: RootState) => state.ticketsReducer.filters,
  );
  const getFilterTitle = () => {
    switch (filterBy) {
      case FilterBy.Connections:
        return "Количество пересадок";
      case FilterBy.Company:
        return "Компания";
    }
  };
  interface HandleFilterProps {
    filterBy: FilterBy;
    id: string;
    checked: boolean;
  }
  const handleFilter = ({ filterBy, id, checked }: HandleFilterProps) => {
    dispatch(setFilterBy({ filterBy, id, checked }));
  };

  return (
    <div className={"Filter"}>
      <h2 className={"Filter__title"}>{getFilterTitle()}</h2>
      <div className={"Filter__list"}>
        {filtersData[filterBy].map((item) => (
          <FormComponent
            id={item.id}
            target={filterBy}
            text={item.text}
            key={item.id}
            onChange={(e) =>
              handleFilter({
                filterBy: filterBy,
                id: item.id,
                checked: e.target.checked,
              })
            }
            checked={
              filterBy === FilterBy.Company
                ? company[0] === item.id
                : connections.includes(item.id)
            }
          />
        ))}
      </div>
    </div>
  );
};
