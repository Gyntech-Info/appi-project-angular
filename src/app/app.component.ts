import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './core/template/footer/footer.component';
import { HeaderComponent } from './core/template/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    CommonModule,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public menu = [
    { name: 'Home', path: '' },
    { name: 'Modulos', path: 'modules' },
    { name: 'Crud', path: 'crud' },
  ];
}
