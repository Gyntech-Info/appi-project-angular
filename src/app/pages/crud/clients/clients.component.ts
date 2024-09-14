import { Component, inject, OnInit } from '@angular/core';
import { ListComponent } from "../../../components/crud/list/list.component";
import { BannerComponent } from "../../../shared/components/banner/banner.component";
import { ClientService } from "../../../core/services/client.service";
import { MatTableModule } from '@angular/material/table';


@Component({
  standalone: true,
  imports: [ListComponent, BannerComponent, MatTableModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss',
})
export class Clients implements OnInit {

  private clientsService = inject(ClientService)

  public displayedColumns: string[] = ['id', 'name', 'cpf', 'email'];
  public clients: any[] = []

  ngOnInit(): void {
    this.getClients()
  }

  private getClients() {
    this.clientsService.getAllClients().subscribe((data: any) => {
      return this.clients = data
    })
  }

}
