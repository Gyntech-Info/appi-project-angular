import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private http = inject(HttpClient)
  private apiPath = environment.apiPath

  public getAllClients(): Observable<any> {
    const path = `${this.apiPath}/clients`
    return this.http.get(path).pipe()
  }
}