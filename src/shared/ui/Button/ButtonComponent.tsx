import "./ButtonComponent.scss";
import { useSelector } from "react-redux";
import type { RootState } from "@app/store.ts";
import { SortBy } from "@features/tickets/model/types.ts";
export interface ButtonComponentProps {
  text?: string;
  sortBy?: SortBy;
  place: string;
  onClick: () => void;
  imageLink?: string;
  dropdownVisible?: boolean;
}
export const ButtonComponent = ({
  text,
  sortBy,
  place,
  onClick,
  imageLink,
  dropdownVisible,
}: ButtonComponentProps) => {
  const rootSortBy = useSelector(
    (state: RootState) => state.ticketsReducer.sortBy,
  );
  const isActive = rootSortBy === sortBy ? "Button--header--active" : "";
  const img = imageLink ? (
    <img
      className={`Button--${place}__image ${dropdownVisible && `Button--${place}__image--rotated`} `}
      src={imageLink}
      alt={text}
    />
  ) : null;
  return (
    <button className={`Button Button--${place} ${isActive}`} onClick={onClick}>
      <span className={`Button--${place}__text`}>{text}</span>
      {img}
    </button>
  );
};
