const Skeleton = ({
  paragraph = ["50%", "80%", "70%", "70%", "60%", "70%", "90%"],
}) => {
  return (
    <div class='w-full animate-pulse'>
      {paragraph.map((width, index) => (
        <div
          key={index}
          class={`h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-4`}
          style={{ width: width }}
        ></div>
      ))}
      <span class='sr-only'>Loading...</span>
    </div>
  );
};
export default Skeleton;
