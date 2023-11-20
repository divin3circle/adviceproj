import React from "react";

const Advice = ({ advice }) => {
  return (
    <div>
      <p className="leading-relaxed text-xl text-advice p-2 font-semibold">
        {advice}
      </p>
    </div>
  );
};

export default Advice;
