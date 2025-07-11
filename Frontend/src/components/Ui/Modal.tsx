import { X } from "lucide-react";
import { ReactNode } from "react";

interface IModal {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ open, onClose, children }: IModal) => {
  return (
    <div
      className={`
        z-[100] fixed inset-0 justify-center items-center 
        transition-colors flex overflow-y-auto p-4 sm:p-6
        ${open ? "visible bg-black/50" : "invisible"}
      `}
      onClick={onClose}
    >
      <div
        className={`
          relative w-full max-w-md mx-auto bg-bg rounded-xl shadow 
          p-4 sm:p-6 transition-all
          ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="
            absolute top-2 right-2 p-1 rounded-lg 
            text-gray-500 hover:text-gray-800 
            dark:text-gray-400 dark:hover:text-gray-200 
            transition-colors duration-150
          "
          onClick={onClose}
        >
          <X size={20} className="sm:size-[24px]" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
