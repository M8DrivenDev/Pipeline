import { IAvatar } from "../../lib/interfaces";
import { AVATAR_SIZES } from "../../lib/constants";

const Avatar = ({ src, alt, size = "md" }: IAvatar) => {
  return (
    <div className="relative">
      <div className={`${AVATAR_SIZES[size]} rounded-full overflow-hidden`}>
        <img className="w-full h-full object-cover" src={src} alt={alt} />
      </div>
    </div>
  );
};

export default Avatar;
