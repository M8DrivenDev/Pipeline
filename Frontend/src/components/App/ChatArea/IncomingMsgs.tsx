import useChats from "../../../hooks/useChats";
import { API_PUBLIC_URL } from "../../../lib/apiCenter/apiConfig";
import { cutLongSentence } from "../../../lib/helpers/app";
import Avatar from "../Avatar";

const IncomingMsgs = ({
  content,
  time,
}: {
  content: string;
  time?: string;
}) => {
  const { photo, name } = useChats();
  return (
    <div className="flex  gap-2.5  mx-auto">
      <Avatar src={`${API_PUBLIC_URL + "/" + photo}`} size="sm" alt="contact" />
      <div className="flex flex-col">
        <div className="w-max  flex flex-col">
          <h1 className="text-gray-500 font-normal">
            {name && cutLongSentence(name, 20)}
          </h1>

          <div className="px-3.5 py-2 bg-[#2B3D5E] rounded-3xl rounded-tl-none justify-start  items-center gap-3  max-w-96 ">
            <h5 className="text-white text-sm font-normal leading-snug break-words">
              {content}
            </h5>
          </div>
          <div className="justify-end items-center inline-flex mb-2.5">
            <h6 className="text-gray-500 text-xs font-normal leading-4 py-1 mr-2">
              {time}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomingMsgs;
