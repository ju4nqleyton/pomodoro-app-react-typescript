import { Timer } from "./Timer";

export class Pomodoro {
  workDuration: number;
  breakDuration: number;
  currentTimer: Timer;
  cycles: number;
  currentCycle: number = 0;

  constructor(workDuration: number, breakDuration: number, cycles: number) {
    this.workDuration = workDuration;
    this.breakDuration = breakDuration;
    this.cycles = cycles;
    this.currentTimer = new Timer(this.workDuration);
  }

  //TODO:
  startWork() {}

  startBreak() {}

  completeCycle() {}

  resetPomodoro() {}
}
