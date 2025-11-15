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
        style={{ display: 'none' }}
      />
      <label 
        className={"Form__label"} 
        htmlFor={`Form__input_${id}`}
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          color: '#858AE3',
          fontSize: '16px',
          fontWeight: '500',
          paddingLeft: '30px',
          userSelect: 'none',
          lineHeight: '1'
        }}
      >
        {target === FilterBy.Company && (
          <span
            style={{
              position: 'absolute',
              left: '0',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '21px',
              height: '21px',
              borderRadius: '50%',
              border: checked ? '2px solid var(--accent)' : '1px solid var(--border)',
              backgroundColor: 'var(--bg-card)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
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
          <span
            style={{
              position: 'absolute',
              left: '0',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '21px',
              height: '21px',
              borderRadius: '4px',
              border: checked ? '2px solid var(--accent)' : '1px solid var(--border)',
              backgroundColor: 'var(--bg-card)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
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
