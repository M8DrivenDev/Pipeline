import { useState } from "react";
import { FaPen } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { IUserSettingsInput } from "../../lib/interfaces";

const UserSettingsInput = ({
  isLoading,
  value,
  name,
  err,
  errMsg,
  ...rest
}: IUserSettingsInput) => {
  const [touched, setIsTouched] = useState(false);
  return (
    <div
      className={`w-full max-w-sm min-w-[200px]  ${isLoading ? "animate-pulse" : ""}`}
    >
      <div className="relative flex flex-col items-center justify-center">
        <input
          className={`peer w-full my-2 bg-transparent placeholder:text-slate-400 text-sm rounded-md px-3 py-2 transition-all border duration-300 ease focus:outline-none shadow-sm focus:shadow ${touched ? (err ? "border-red-500 dark:border-red-500" : "border-gray-500") : err ? "border-red-700" : "border-gray-200 dark:border-gray-900"} text-slate-400`}
          disabled={!touched}
          value={value}
          name={name}
          {...rest}
        />

        {err ? (
          <p className="absolute top-[38px] bg-bg text-red-600 text-xs font-semibold">
            {errMsg}
          </p>
        ) : (
          ""
        )}
        <button
          type="button"
          className={`absolute right-4 ${touched ? "top-[17px]" : "top-[19px]"} text-text`}
          onClick={() => {
            setIsTouched(!touched);
          }}
        >
          {touched ? <IoClose size={"20"} /> : <FaPen />}
        </button>
      </div>
    </div>
  );
};

export default UserSettingsInput;
