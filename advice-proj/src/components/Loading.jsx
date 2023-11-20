import React from "react";
import { FaSpinner } from "react-icons/fa";

const LoadingComponent = () => {
  return (
    <div className="flex md:gap-4 gap-2 items-center justify-center">
      <div className="text-title">
        <FaSpinner className="animate-spin text-4xl" />
      </div>
      <h1 className="text-title font-semibold text-xl">
        Let's ask Eleanor Roosevelt
      </h1>
    </div>
  );
};

export default LoadingComponent;
