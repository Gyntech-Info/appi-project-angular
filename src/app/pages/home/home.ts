import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { BannerComponent } from "../../shared/components/banner/banner.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, RouterModule, MatCardModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  public readonly items = signal([
    { name: 'Contador', link: '/counter' },
    { name: 'Diretivas', link: '/directives' },
    { name: 'Crud', link: '/crud' },
    { name: 'Signal', link: '/signal' },
  ])
}
