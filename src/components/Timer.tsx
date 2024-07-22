import React from "react";

interface TimerProps {
  remainingTime: number;
}

const Timer: React.FC<TimerProps> = ({ remainingTime }) => {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return (
    <div className="w-full max-w-xs rounded-lg bg-white p-6 text-center shadow-lg md:max-w-md md:p-10">
      <div className="font-mono text-4xl text-gray-900 md:text-6xl">{`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}</div>
    </div>
  );
};

export default Timer;
