/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import type { UseFormRegisterReturn } from "react-hook-form";

const InterPhoneInput = forwardRef<
  HTMLInputElement,
  Partial<UseFormRegisterReturn>
>(({ onChange, onBlur, name }, ref) => {
  return (
    <div className="w-full">
      <PhoneInput
        countrySelectorStyleProps={{
          buttonClassName: "bg-red-400",
          buttonStyle: {
            padding: "0.5rem",
          },
          dropdownArrowClassName: "text-red-400",
          dropdownArrowStyle: {
            fontSize: "1.5rem",
            marginTop: "0.5rem",
          },
          dropdownStyleProps: {
            style: {
              width: "19vw",
            },
          },
        }}
        inputClassName="w-full focus:ring-0"
        className=" w-full rounded  focus-within:border-secondary 
  focus-within:ring-secondary/80 
  focus-within:ring-[1.8px] 
  focus-within:outline-none "
        defaultCountry="in"
        name={name}
        onChange={onChange as any}
        onBlur={onBlur}
        inputRef={ref as any}
        inputProps={{
          autoComplete: "off",
        }}
      />
    </div>
  );
});

export default InterPhoneInput;