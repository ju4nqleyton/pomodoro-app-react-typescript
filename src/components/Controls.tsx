import React from "react";
import { FaPlay, FaStop, FaStepForward } from "react-icons/fa";

const Controls: React.FC = () => {
  return (
    <div className="mt-6 flex flex-col space-y-4 md:mt-10 md:flex-row md:space-x-4 md:space-y-0">
      <button className="flex items-center justify-center rounded-lg bg-blue-700 px-4 py-2 text-white shadow hover:bg-blue-900">
        <FaPlay className="h-5 w-5" />
      </button>
      <button className="flex items-center justify-center rounded-lg bg-green-700 px-4 py-2 text-white shadow hover:bg-green-900">
        <FaStepForward className="h-5 w-5" />
      </button>
      <button className="flex items-center justify-center rounded-lg bg-red-700 px-4 py-2 text-white shadow hover:bg-red-900">
        <FaStop className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Controls;
