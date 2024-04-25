import { ChangeEvent, FocusEvent, ReactNode } from "react";
import clsx from "clsx";
import Icon from "./Icon";

type Type = "text" | "email" | "password" | "number";

interface InputProps {
  id: string;
  type: Type;
  inputStyles: string;
  placeholder?: string;
  wrapperStyles?: string;
  name: string;
  value: string;
  icon?: boolean;
  showPassword?: boolean;
  children?: ReactNode;
  touched?: boolean;
  errors?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  toggleShowPassword?: () => void;
}

const Input = ({
  id,
  type = "text",
  name,
  inputStyles,
  wrapperStyles,
  value,
  onChange,
  onBlur,
  showPassword,
  toggleShowPassword,
  icon,
  children,
  touched,
  errors,
  placeholder,
}: InputProps) => {
  return (
    <div className={clsx("relative", wrapperStyles)}>
      <input
        id={id}
        type={showPassword ? "text" : type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        className={clsx(
          "w-full  border-1 border-grey outline-none placeholder:text-darkGrey rounded-30 text-14 tablet:text-16 leading-[1.29] tracking-[-0.03em] hover:border-accent transition-colors duration-350",
          inputStyles
        )}
      />
      {icon && (
        <button
          type="button"
          className={clsx(
            "absolute top-[12px] z-[1] outline-none tablet:top-[16px]",
            (touched && errors) || (touched && !errors)
              ? "right-[45px] md:right-[50px]"
              : "right-[16px]"
          )}
          onClick={toggleShowPassword}
        >
          <Icon
            className="stroke-accent w-[18px] h-[18px] tablet:w-[22px] tablet:h-[22px]"
            w={18}
            iconName={showPassword ? "icon-eye" : "icon-eye-off"}
          />
        </button>
      )}

      {children}
    </div>
  );
};

export default Input;
