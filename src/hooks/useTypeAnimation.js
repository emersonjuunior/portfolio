import { Typewriter, useTypewriter } from "react-simple-typewriter";

export const useTypeAnimation = ( value) => {
  const [text] = useTypewriter({
    words: [value],
    typeSpeed: 200,
  });
  return text;
};
