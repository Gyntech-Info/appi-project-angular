import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  public title: string = 'Bem vindo ao APPI Project Angular'
  public description: string = 'Projeto de estudos desenvolvido com a versão 17 do framework!'
}
