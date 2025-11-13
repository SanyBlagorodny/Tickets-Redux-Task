import "./FormComponent.scss";
import type { ChangeEvent } from "react";
import { FilterBy } from "@features/tickets/model/types.ts";

export interface FormComponentProps {
  target: FilterBy;
  text: string;
  id: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
}
export const FormComponent = ({
  target,
  text,
  id,
  onChange,
  checked,
}: FormComponentProps) => {
  return (
    <div className={"Form"}>
      <input
        className={`Form__input Form__input--${target}`}
        type={target === FilterBy.Company ? "radio" : "checkbox"}
        name={`Form__group_${target}`}
        id={`Form__input_${id}`}
        onChange={onChange}
        checked={checked}
      />
      <label className={"Form__label"} htmlFor={`Form__input_${id}`}>
        {text}
      </label>
    </div>
  );
};
