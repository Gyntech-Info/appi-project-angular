import { Component } from '@angular/core';
import { CounterComponent } from "./counter/counter.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CounterComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
