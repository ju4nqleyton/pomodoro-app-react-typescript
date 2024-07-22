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

  startWork() {
    this.currentTimer = new Timer(this.workDuration);
    this.currentTimer.start();
  }

  startBreak() {
    this.currentTimer = new Timer(this.breakDuration);
    this.currentTimer.start();
  }

  completeCycle() {
    if (this.currentCycle < this.cycles) {
      this.currentCycle += 1;
      this.startWork();
    } else {
      this.resetPomodoro();
    }
  }

  resetPomodoro() {
    this.currentCycle = 0;
    this.currentTimer.reset();
  }
}
