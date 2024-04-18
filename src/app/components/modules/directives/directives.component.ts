import { Component } from '@angular/core';
import { IPropertiesData } from "../../../shared/models/properties-data.interface";
import { PropertiesDataConst } from "../../../shared/utils/consts/properties-data.const";
import { CardsComponent } from "../../../shared/components/cards/cards.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule, CardsComponent],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {

  public selectedTemplate!: string;
  public isVisible: boolean = true;
  public buttonName: string = "Mostrar";
  public directivesData: IPropertiesData[] = PropertiesDataConst;

  loadTemplate(data: any) {
    this.selectedTemplate = data;
  }

  // setStatus() {
  //   this.isVisible = !this.isVisible;
  //   this.buttonName = this.isVisible ? 'Esconder' : 'Mostrar';
  // }

}
