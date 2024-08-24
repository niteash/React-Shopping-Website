import React from "react";

export const Container = ({ children, className }) => {
  return (
    <div className={`w-full md:w-[720px] lg:w-[1000px] mx-auto flex flex-col gap-10 ${className}`}>
      {children}
    </div>
  );
};
