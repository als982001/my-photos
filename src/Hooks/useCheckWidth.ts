import { useEffect, useState } from "react";

export default function useCheckWidth() {
  const [overHalf, setOverHalf] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      setOverHalf(window.screen.width / 2 <= screenWidth);

      console.log(window.screen.width / 3 <= screenWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { overHalf };
}
