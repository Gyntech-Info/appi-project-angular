import { Component } from '@angular/core';
import { ListComponent } from "../../../components/crud/list/list.component";
import { BannerComponent } from "../../../shared/components/banner/banner.component";

@Component({
  standalone: true,
  imports: [ListComponent, BannerComponent],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class Clients {

}
