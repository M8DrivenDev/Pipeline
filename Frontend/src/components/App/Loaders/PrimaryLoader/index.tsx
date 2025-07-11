import LogoIcon from "../LogoLoader";
import "./style.css";
const PrimaryLoader = () => {
  return (
    <div className="z-[101] fixed inset-0 justify-center items-center transition-colors flex visible bg-black/30">
      <LogoIcon />
    </div>
  );
};

export default PrimaryLoader;
