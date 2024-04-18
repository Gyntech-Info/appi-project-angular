import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { BannerComponent } from "../../shared/components/banner/banner.component";
import { DirectivesComponent } from "../../components/modules/directives/directives.component";

@Component({
  selector: 'app-modules',
  standalone: true,
  imports: [RouterModule, CommonModule, BannerComponent, DirectivesComponent],
  templateUrl: './modules.html',
  styleUrl: './modules.scss'
})
export class Modules {

  public isVisible: boolean = false;
  public buttonName: string = "Mostrar";

  setStatus() {
    this.isVisible = !this.isVisible;
    this.buttonName = this.isVisible ? 'Esconder' : 'Mostrar';
  }

}
