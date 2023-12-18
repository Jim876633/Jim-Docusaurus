import { useLayoutEffect, useState } from "react";

const breakpoints = {
  sm: 635,
};

const useMedia = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [sm, setSm] = useState(false);

  useLayoutEffect(() => {
    const handleResize = () => {
      const { innerWidth, innerHeight } = window;
      const isSm = innerWidth <= breakpoints.sm;

      setWindowSize({
        width: innerWidth,
        height: innerHeight,
      });

      setSm(isSm);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { sm, windowSize };
};

export default useMedia;
