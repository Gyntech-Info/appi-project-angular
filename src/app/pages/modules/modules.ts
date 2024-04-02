import { Component } from '@angular/core';
import { CardsComponent } from "../../shared/components/cards/cards.component";

@Component({
  selector: 'app-modules',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './modules.html',
  styleUrl: './modules.scss'
})
export class Modules {


}
