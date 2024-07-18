import React from "react";

const Timer: React.FC = () => {
  return (
    <div className="w-full max-w-xs rounded-lg bg-white p-6 text-center shadow-lg md:max-w-md md:p-10">
      <div className="font-mono text-4xl text-gray-900 md:text-6xl">25:00</div>
    </div>
  );
};

export default Timer;
