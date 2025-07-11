import { IHighlightTextProps } from "../../lib/interfaces";

const HighlightText = ({
  text,
  highlight,
  className = "",
}: IHighlightTextProps) => {
  if (!highlight.trim()) return <span className={className}>{text}</span>;

  const parts = text.toString().split(new RegExp(`(${highlight})`, "gi"));

  return (
    <span className={className}>
      {parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span
            key={index}
            className="bg-indigo-500/20 text-second rounded px-0.5"
          >
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </span>
  );
};

export default HighlightText;
