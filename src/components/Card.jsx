import clsx from "clsx";
import React from "react";

export const Card = ({
  title,
  children,
  className,
  style,
  bodyStyle,
  bordered = true,
}) => {
  return (
    <div
      className={clsx(
        "rounded-lg bg-white dark:bg-gray-800",
        bordered && "border border-gray-200 dark:border-gray-700",
        className
      )}
      style={style}
    >
      {title && (
        <div className='px-6 py-4 border-b border-gray-200 dark:border-gray-700 '>
          {typeof title === "string" ? (
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
              {title}
            </h3>
          ) : (
            title
          )}
        </div>
      )}
      <div className='p-6' style={bodyStyle}>
        {children}
      </div>
    </div>
  );
};

export default Card;
