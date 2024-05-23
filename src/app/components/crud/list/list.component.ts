import { CommonModule } from "@angular/common";
import { Component } from '@angular/core';
import { DialogComponent } from "../dialog/dialog.component";
import {
  MatDialog,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, MatButtonModule, DialogComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  items = [
    'item 01',
    'item 02',
    'item 03',
    'item 04',
    'item 05',
  ]

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {

    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');

    });
  }

}
