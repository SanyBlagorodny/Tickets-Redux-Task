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
        value={id}
        onChange={onChange}
        checked={checked}
      />
      <label 
        className={"Form__label"} 
        htmlFor={`Form__input_${id}`}
      >
        {target === FilterBy.Company && (
          <span className="Form__radio-indicator">
            {checked && (
              <img 
                src="/src/shared/assets/svg/chek_ellipse.svg" 
                width="15" 
                height="15" 
                alt="radio"
              />
            )}
          </span>
        )}
        {target !== FilterBy.Company && (
          <span className="Form__checkbox-indicator">
            {checked && (
              <img 
                src="/src/shared/assets/svg/check_arow.svg" 
                width="15" 
                height="15" 
                alt="check"
              />
            )}
          </span>
        )}
        {text}
      </label>
    </div>
  );
};
