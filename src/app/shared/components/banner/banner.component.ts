import { CommonModule } from "@angular/common";
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  @Input()
  public title: string = 'Bem vindo ao APPI Project Angular'
  @Input()
  public description: string = 'Projeto de estudos desenvolvido com a versão 17 e 18 do framework!'
  @Input()
  isImageSize = false

}
