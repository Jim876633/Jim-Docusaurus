import BrowserOnly from "@docusaurus/BrowserOnly";
import useMedia from "@site/src/hooks/useMedia.jsx";
import React from "react";

export const Img = ({ src, width = "100%", center = false, style = {} }) => {
  const customStyle = {
    width: `min(100%,${width})`,
    display: center ? "block" : "inline-block",
    margin: center ? "0 auto" : "0",
    borderRadius: "5px",
    ...style,
  };
  return (
    <>
      <img src={src} style={{ ...customStyle }} />
      <br />
      <br />
    </>
  );
};

export const Block = ({
  children,
  width = "100%",
  center = false,
  style = {},
}) => (
  <BrowserOnly>
    {() => {
      const { sm } = useMedia();
      const customStyle = {
        width: `min(100%,${width})`,
        margin: center ? "0 auto" : "0",
        display: "flex",
        flexDirection: sm ? "column" : "row",
        gap: "10px",
        alignItems: "center",
        ...style,
      };
      return <div style={{ ...customStyle }}>{children}</div>;
    }}
  </BrowserOnly>
);

export const ImgBlock = ({ style, width = "100%", src }) => {
  const customStyle = {
    width: `min(100%,${width})`,
    flex: 1,
    ...style,
  };
  return (
    <div style={{ ...customStyle }}>
      <Img src={src} />
    </div>
  );
};
