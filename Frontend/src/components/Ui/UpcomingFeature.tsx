import { FaUsersGear } from "react-icons/fa6";
import Button from "./Button";

interface IProp {
  close: () => void;
}
const UpcomingFeature = ({ close }: IProp) => {
  return (
    <div className=" max-w-lg p-4 flex flex-col justify-center items-center  ">
      <FaUsersGear className="text-text mb-3" size={"100"} />
      <h1 className="text-text font-bold text-lg mb-3">
        Working on Something New!
      </h1>

      <p className="text-gray-500 text-center text mb-3">
        We're putting in our best effort to deliver a feature we know you'll
        love. It’s coming soon stay tuned!
      </p>
      <Button onClick={close}>Close</Button>
    </div>
  );
};

export default UpcomingFeature;
