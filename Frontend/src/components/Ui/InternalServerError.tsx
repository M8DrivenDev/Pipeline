import Error from "../Icons/Error";
import Button from "./Button";
import { X } from "lucide-react";

interface IProp {
  open: boolean;
  onClose: () => void;
}
const InternalServerError = ({ open, onClose }: IProp) => {
  return (
    <div
      className={`z-[150] fixed inset-0 justify-center items-center transition-colors flex ${open ? "visible bg-black/50" : "invisible"}`}
    >
      <div
        className={` bg-bg rounded-xl shadow p-6 transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 p-1 rounded-lg text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-150"
          onClick={onClose}
        >
          <X />
        </button>
        <div className=" w-64 flex flex-col justify-center items-center text-center gap-1">
          <Error />
          <h1 className="font-bold font-mono my-1 text-text">
            Server Error 500
          </h1>
          <p className=" text-gray-600">
            Looks like we're having some trouble on our end. Hang tight while we
            fix it, or try again in a bit.
          </p>

          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
};

export default InternalServerError;
