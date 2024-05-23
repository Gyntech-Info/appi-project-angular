import { Component } from '@angular/core';
import { BannerComponent } from "../../shared/components/banner/banner.component";
import { ListComponent } from "../../components/crud/list/list.component";

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [BannerComponent, ListComponent],
  templateUrl: './crud.html',
  styleUrl: './crud.scss'
})
export class Crud {



}
