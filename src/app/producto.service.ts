import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private baseURL ="http://localhost:8080/ruta/productos"

  constructor(private httpClient : HttpClient) {}

    obtenerListadeProductos():Observable<Producto[]>{
      return this.httpClient.get<Producto[]>(`${this.baseURL}`);
    }
  
}
