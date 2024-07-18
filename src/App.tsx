import React from "react";
import Header from "./components/Header";
import Timer from "./components/Timer";
import Controls from "./components/Controls";

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <Header />
      <Timer />
      <Controls />
    </div>
  );
};

export default App;
