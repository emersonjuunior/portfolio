import { Typewriter, useTypewriter } from "react-simple-typewriter";

export const useTypeAnimation = ( value, speed ) => {
  const [text] = useTypewriter({
    words: [value],
    typeSpeed: speed,
  });
  return text;
};
