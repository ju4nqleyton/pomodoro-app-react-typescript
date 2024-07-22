/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import { Pomodoro } from "./classes/Pomodoro";
import Header from "./components/Header";
import Timer from "./components/Timer";
import Controls from "./components/Controls";

const App: React.FC = () => {
  const [pomodoro, setPomodoro] = useState(new Pomodoro(1500, 300, 4));
  const [remainingTime, setRemainingTime] = useState(
    pomodoro.currentTimer.remainingTime,
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(pomodoro.currentTimer.remainingTime);
    }, 1000);

    return () => clearInterval(interval);
  }, [pomodoro]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <Header />
      <Timer remainingTime={remainingTime} />
      <Controls
        onStart={() => pomodoro.startWork()}
        onPause={() => pomodoro.currentTimer.pause()}
        onReset={() => pomodoro.resetPomodoro()}
      />
    </div>
  );
};

export default App;
