import { LiHTMLAttributes, ReactNode } from "react";

interface IProp extends LiHTMLAttributes<HTMLLIElement> {
  children: ReactNode;
}
const ListItem = ({ children, ...rest }: IProp) => {
  return (
    <li
      className="p-3 rounded-md hover:bg-gray-400 dark:hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
      {...rest}
    >
      {children}
    </li>
  );
};

export default ListItem;
