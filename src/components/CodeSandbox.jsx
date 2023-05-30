import React from "react";

/**
 *
 * @param {url, height}
 * @returns
 */
export default function ({
  url,
  height = "400px",
  initialPath = "%2F",
  title,
  codebasePath,
}) {
  const formatCodebasePath = codebasePath.replace(/\//g, "%2F");
  return (
    <>
      <iframe
        src={`${url}&module=${formatCodebasePath}&view=split&initialpath=${initialPath}`}
        style={{
          width: "100%",
          height,
          border: 0,
          borderRadius: "4px",
          overflow: "hidden",
        }}
        title={title}
        allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
        sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
      ></iframe>
      <br />
      <br />
    </>
  );
}
