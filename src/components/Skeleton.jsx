import clsx from "clsx";

const Skeleton = ({
  paragraph = ["50%", "80%", "70%", "70%", "60%", "70%", "90%"],
  className,
}) => {
  return (
    <div className={clsx("w-full animate-pulse", className)}>
      {paragraph.map((width, index) => (
        <div
          key={index}
          className={`h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-4`}
          style={{ width: width }}
        ></div>
      ))}
      <span className='sr-only'>Loading...</span>
    </div>
  );
};
export default Skeleton;
