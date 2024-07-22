export class Timer {
  duration: number;
  intervalId: NodeJS.Timeout | null = null;
  remainingTime: number;
  isRunning: boolean = false;

  constructor(duration: number) {
    this.duration = duration;
    this.remainingTime = duration;
  }

  start() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.intervalId = setInterval(() => this.tick(), 1000);
    }
  }

  pause() {
    if (this.isRunning && this.intervalId) {
      clearInterval(this.intervalId);
      this.isRunning = false;
    }
  }

  reset() {
    this.pause();
    this.remainingTime = this.duration;
  }

  tick() {
    if (this.remainingTime > 0) {
      this.remainingTime -= 1;
    } else {
      this.pause();
    }
  }
}
