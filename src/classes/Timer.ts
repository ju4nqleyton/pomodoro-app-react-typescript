export class Timer {
  duration: number;
  intervalId: NodeJS.Timeout | null = null;
  remainingTime: number;
  isRunning: boolean = false;

  constructor(duration: number) {
    this.duration = duration;
    this.remainingTime = duration;
  }

  //TODO:
  start() {}

  pause() {}

  reset() {}

  tick() {}
}
