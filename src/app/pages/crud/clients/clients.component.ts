import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { BannerComponent } from "../../../shared/components/banner/banner.component";
import { ClientsFormComponent } from "../../../components/crud/clients-form/clients-form.component";
import { ClientStore } from "../../../core/store/client.store";


@Component({
  imports: [BannerComponent, MatTableModule, ClientsFormComponent],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss',
})
export class Clients {
  private readonly clientStore = inject(ClientStore)

  public displayedColumns: string[] = ['id', 'name', 'cpf', 'email'];
  public readonly clients = this.clientStore.clients
}
