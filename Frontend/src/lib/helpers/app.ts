export const cutLongSentence = (sentence: string, charsCount: number) => {
  if (sentence.length > charsCount) {
    const result = sentence.slice(0, charsCount) + "...";
    return result;
  } else {
    return sentence;
  }
};

export const formatMessagePreview = (content: string) => {
  return content.length > 30 ? content.substring(0, 30) + "..." : content;
};
