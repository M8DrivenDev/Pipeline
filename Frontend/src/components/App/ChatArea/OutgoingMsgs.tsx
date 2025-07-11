const OutgoingMsgs = ({ content, time }: { content: string; time: string }) => {
  return (
    <div className="flex gap-2.5  mx-auto justify-end">
      <div className="flex flex-col">
        <div className="w-max  flex flex-col">
          <div className="px-3.5 py-2 bg-[#1B263B] rounded-3xl rounded-tr-none justify-start  items-center gap-3  max-w-96 ">
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

export default OutgoingMsgs;
