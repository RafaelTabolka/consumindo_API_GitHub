import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Interface } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class ConsumoServicesService {

  private readonly url:string = "https://api.github.com/users"

  constructor(private http: HttpClient) { }

  dataUser(userName:string):Observable<any> {
    return this.http.get<Interface>(`${this.url}/${userName}`)
  }
}
