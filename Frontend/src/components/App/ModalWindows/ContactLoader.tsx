import useWindowSize from "../../../hooks/useWindowSize";
import AvatarLoader from "../Loaders/avatarLoader";
import TextLoader from "../Loaders/TextLoader";

const ContactLoader = () => {
  const { width } = useWindowSize();

  return (
    <li className="w-full">
      <div className="flex items-center space-x-2 sm:space-x-4 p-2 sm:p-3 w-full">
        <div className="flex-shrink-0 inline-flex items-start mr-2 sm:mr-3">
          <AvatarLoader size={width < 640 ? "sm" : "md"} />
        </div>
        <div className="flex-grow pr-1 min-w-0">
          <h2 className="text-base sm:text-xl leading-snug font-bold text-text truncate">
            <TextLoader w="w-32 sm:w-48" h="h-3 sm:h-4" />
          </h2>
          <div className="flex items-center text-xs sm:text-sm font-medium text-second space-x-1">
            <TextLoader w="w-16 sm:w-20" h="h-2 sm:h-3" />
            <TextLoader w="w-2 sm:w-3" h="h-2 sm:h-3" />
          </div>
        </div>
      </div>
    </li>
  );
};

export default ContactLoader;
