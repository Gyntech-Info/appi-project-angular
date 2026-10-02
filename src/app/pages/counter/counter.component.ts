import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent implements OnInit {

  public secondsLeft = 0;
  public timer: any = {};


  public ngOnInit(): void {
    this.secondsLeft = this.getSecondsUntilMidnight();
  }

  public formatTime() {
    const hours = Math.floor(this.secondsLeft / 3600);
    const minutes = Math.floor((this.secondsLeft % 3600) / 60);
    const seconds = this.secondsLeft % 60;
    return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  public start() {
    this.timer = setInterval(() => {
      if (this.secondsLeft > 0) {
        this.secondsLeft--
      } else {
        clearInterval(this.timer);
        this.timer = {};
      }
    }, 1000);
  }

  public pause() {
    clearInterval(this.timer);
    this.timer = {};
  }

  public reset() {
    clearInterval(this.timer);
    this.timer = {};
    this.secondsLeft = this.getSecondsUntilMidnight();
  }

  getSecondsUntilMidnight() {
    const now: any = new Date();
    const midnight: any = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
    return Math.floor((midnight - now) / 1000);
  }

}
