import { postalCode } from './../models/postalcode';
import { environment } from './../../environments/environment';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  API_URL = environment.VIACEP

  constructor(private http: HttpClient) { }

  getPostalcode(cep: string): Observable<any> {
    return this.http.get<postalCode>(`${this.API_URL}/${cep}/json/`);
  }
}