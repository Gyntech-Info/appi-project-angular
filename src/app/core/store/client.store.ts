import { effect, inject, Injectable, signal } from "@angular/core";
import { ClientService } from "../services/client.service";

@Injectable({
  providedIn: 'root'
})
export class ClientStore {
  private readonly clientService = inject(ClientService)

  private readonly _clients = signal([])

  public readonly clients = this._clients.asReadonly()

  constructor() {
    effect(() => {
      this.getData()
    })
  }

  private getData() {
    this.clientService.getAllClients().subscribe((data: any) => {
      return this._clients.set(data)
    })
  }

}