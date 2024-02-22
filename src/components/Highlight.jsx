const Highlight = ({ children, color, block, bold, style }) => {
  let highlightClassName = "";
  switch (color) {
    case "yellow":
      highlightClassName = "highlight-yellow";
      break;
    case "blue":
      highlightClassName = "highlight-blue";
      break;
    case "green":
      highlightClassName = "highlight-green";
      break;
    case "red":
      highlightClassName = "highlight-red";
      break;
    default:
      highlightClassName = "highlight-yellow";
      break;
  }
  const customStyle = {
    fontWeight: bold ? "bold" : "normal",
    ...style,
  };
  if (block) {
    return (
      <>
        <div
          className={`${highlightClassName} highlight`}
          style={{ ...customStyle }}
        >
          {children}
        </div>
        <p />
      </>
    );
  }

  return (
    <span
      className={`${highlightClassName} highlight`}
      style={{ ...customStyle }}
    >
      {children}
    </span>
  );
};

export default Highlight;
