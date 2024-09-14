import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatSidenavModule],
  templateUrl: './crud.html',
  styleUrl: './crud.scss'
})
export class Crud {

  public showFiller = false;

  changeStatus() {
    this.showFiller = !this.showFiller;
  }

}
