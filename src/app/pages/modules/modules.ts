import { Component } from '@angular/core';
import { CardsComponent } from "../../shared/components/cards/cards.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-modules',
  standalone: true,
  imports: [RouterModule, CommonModule, CardsComponent],
  templateUrl: './modules.html',
  styleUrl: './modules.scss'
})
export class Modules {

  public modulesData = [
    {
      name: 'NgIf e else Sintaxe', template: `
  <ng-container *ngIf="condicional; else outro_template">
    <span>Template 01</span>
  </ng-container>
  <ng-template #outro_template>
    <span>Outro Template</span>
  </ng-template>
`,
    },
    {
      name: '@if, @else if e @else Sintaxe', template: `
@if(condicional01){
  <span>Condição 01</span>
}
@else if(condicional02){
  <span>Condição 02</span>
}
@else{
  <span>Ultima condição</span>
}
`,
    },
    {
      name: 'NgFor Sintaxe', template: `
<span *ngFor="let item of array">
{{item}}
</span>
`,
    },
    {
      name: '@For Sintaxe', template: `
@for(item of array; track item){
  <span>
    {{item}}
  </span>
}
`,
    },
  ];

  selectedTemplate!: string

  loadTemplate(data: any) {
    this.selectedTemplate = data
  }

}
