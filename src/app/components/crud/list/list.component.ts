import { CommonModule } from "@angular/common";
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  items = [
    'item 01',
    'item 02',
    'item 03',
    'item 04',
    'item 05',
  ]

}
