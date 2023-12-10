import { useEffect, useState } from "react";

export default function useCheckWidth() {
  const [overHalf, setOverHalf] = useState(true);
  const [overTwoThirds, setOverTwoThirds] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      setOverHalf(window.screen.width / 2 <= screenWidth);
      setOverTwoThirds(window.screen.width * 0.65 <= screenWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { overHalf, overTwoThirds };
}
