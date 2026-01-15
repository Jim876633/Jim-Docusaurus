import React from "react";

/**
 * CodePen Embed Component
 * @param {slugHash, title, user, height, defaultTab}
 * @returns
 */
export default function CodePen({
  slugHash,
  title,
  user = "jim876633",
  height = "400px",
  defaultTab = "result",
}) {
  return (
    <>
      <iframe
        height={height}
        style={{ width: "100%" }}
        scrolling="no"
        title={title}
        src={`https://codepen.io/${user}/embed/${slugHash}?default-tab=${defaultTab}`}
        frameBorder="no"
        loading="lazy"
        allowTransparency="true"
        allowFullScreen="true"
      >
        See the Pen{" "}
        <a href={`https://codepen.io/${user}/pen/${slugHash}`}>{title}</a> by{" "}
        {user} (<a href={`https://codepen.io/${user}`}>@{user}</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </iframe>
      <br />
      <br />
    </>
  );
}
