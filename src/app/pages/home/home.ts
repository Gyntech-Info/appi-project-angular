import { Component } from '@angular/core';
import { BannerComponent } from "../../shared/components/banner/banner.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
