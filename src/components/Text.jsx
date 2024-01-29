const Text = ({ children, color, bold }) => {
  let textClassName = "";
  switch (color) {
    case "yellow":
      textClassName = "text-yellow";
      break;
    case "blue":
      textClassName = "text-blue";
      break;
    case "green":
      textClassName = "text-green";
      break;
    case "red":
      textClassName = "text-red";
      break;
    default:
      textClassName = "text-yellow";
      break;
  }

  return (
    <span className={`${textClassName} ${bold ? "bold" : ""}`}>{children}</span>
  );
};

export default Text;
