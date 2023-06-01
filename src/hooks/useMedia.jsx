import { useState, useEffect } from "react";

const useMedia = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const breakpoints = {
    sm: 635,
  };

  const [sm, setSm] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth, innerHeight } = window;
      const isSm = innerWidth <= breakpoints.sm;

      setWindowSize({
        width: innerWidth,
        height: innerHeight,
      });

      setSm(isSm);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { sm, windowSize };
};

export default useMedia;
