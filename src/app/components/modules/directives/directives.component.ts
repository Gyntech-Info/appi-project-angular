import { Component, Input } from '@angular/core';
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

  @Input()
  public isVisible: boolean = false;

  public selectedTemplate!: string;
  public directivesData: IPropertiesData[] = PropertiesDataConst;

  loadTemplate(data: any) {
    this.selectedTemplate = data;
  }
}
