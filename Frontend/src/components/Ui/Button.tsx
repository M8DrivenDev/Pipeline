import { IButton } from "../../lib/interfaces";

const Button = ({ children, className, ...rest }: IButton) => {
  return (
    <button
      className={`rounded-md m-2 bg-first text-white text-xs font-bold py-3 px-11 uppercase tracking-wider hover:bg-second dark:bg-fourth dark:hover:bg-third border-none  transition-all ease-in active:scale-[0.90] ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
