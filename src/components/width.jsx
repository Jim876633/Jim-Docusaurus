import React from "react";

export const Img = ({ src, width = "100%" }) => (
  <>
    <img src={src} style={{ width: width }} />
    <br />
    <br />
  </>
);
