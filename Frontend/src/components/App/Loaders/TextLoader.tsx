import { ITextLoader } from "../../../lib/interfaces";

const TextLoader = ({ w, h }: ITextLoader) => {
  return (
    <div
      className={`m-2 animate-pulse  ${w + " " + h} rounded-xl bg-slate-500`}
    ></div>
  );
};
export default TextLoader;
