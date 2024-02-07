const Highlight = ({ children, color, block }) => {
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
  if (block) {
    return (
      <>
        <div className={`${highlightClassName} highlight`}>{children}</div>
        <p />
      </>
    );
  }

  return <span className={`${highlightClassName} highlight`}>{children}</span>;
};

export default Highlight;
