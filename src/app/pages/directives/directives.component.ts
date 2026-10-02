import { Component, Input } from '@angular/core';
import { IPropertiesData } from "../../shared/models/properties-data.interface";
import { PropertiesDataConst } from "../../shared/utils/consts/properties-data.const";
import { CardsComponent } from "../../shared/components/cards/cards.component";


@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {
  public selectedTemplate!: string;
  public directivesData: IPropertiesData[] = PropertiesDataConst;

  public loadTemplate(data: any) {
    this.selectedTemplate = data;
  }
}
