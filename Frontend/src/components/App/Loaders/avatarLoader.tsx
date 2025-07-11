import { AVATAR_SIZES } from "../../../lib/constants";

const AvatarLoader = ({ size }: { size: string }) => {
  return (
    <div
      className={`${AVATAR_SIZES[size]} rounded-full animate-pulse bg-slate-500`}
    ></div>
  );
};

export default AvatarLoader;
