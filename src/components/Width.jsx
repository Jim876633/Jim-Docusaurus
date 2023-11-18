import React from "react";

export const Img = ({ src, width = "100%", center = false, style = {} }) => {
  const customStyle = {
    width: `min(100%,${width})`,
    display: center ? "block" : "inline-block",
    margin: center ? "0 auto" : "0",
  };
  return (
    <>
      <img src={src} style={{ ...customStyle }} />
      <br />
      <br />
    </>
  );
};
