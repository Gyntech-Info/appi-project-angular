import { IPropertiesData } from "../../models/properties-data.interface";

export const PropertiesDataConst: IPropertiesData[] = [
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