import { InputHTMLAttributes, useState } from "react";
import { inputType } from "../../lib/types";
import { Eye, EyeOff } from "lucide-react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  inputType: inputType;
  label: string;
  id: string;
  inputValue: string;
  err: boolean;
  errMsg?: string;
}

const Input = ({
  inputValue,
  id,
  inputType,
  label,
  err,
  errMsg,
  ...rest
}: IProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className="w-full max-w-sm min-w-[200px]">
      <div className="relative flex flex-col items-center justify-center">
        <input
          type={
            inputType === "password" && !isPasswordVisible ? "password" : "text"
          }
          className={`peer w-full my-2 bg-transparent placeholder:text-slate-400 text-bg 700 text-sm border rounded-md px-3 py-2 transition duration-300 ease focus:outline-none shadow-sm focus:shadow
            ${
              err
                ? "border-red-600 text-red-600 focus:border-red-600 hover:border-red-800"
                : "border-bg focus:border-bg hover:border-slate-600 dark:focus:border-slate-500"
            }`}
          {...rest}
          id={id}
        />
        {inputType === "password" && inputValue && (
          <button
            type="button"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            className={`absolute right-2 top-4 transition-all duration-300 ${err ? "text-red-600 hover:text-red-800 dark:hover:text-red-800" : "text-bg"} hover:text-fourth dark:hover:text-third`}
          >
            {isPasswordVisible ? <EyeOff /> : <Eye />}
          </button>
        )}
        {err && (
          <p className="bg-third text-xs text-red-600 absolute z-[1] top-[34px] p-1 dark:bg-first">
            {errMsg}
          </p>
        )}
        <label
          htmlFor={id}
          className={`absolute my-2 cursor-text bg-third dark:bg-first px-1 left-2.5 top-2.5 text-sm transition-all transform origin-left duration-150
            ${inputValue ? "top-[-8px] left-2.5 text-xs scale-90" : ""}
            peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:scale-90
            ${err ? "text-red-600" : "text-bg"}`}
        >
          {label}
        </label>
      </div>
    </div>
  );
};

export default Input;
