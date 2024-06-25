import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alquiler } from '../models/alquiler';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlquilerService {

  constructor(private _http: HttpClient) { }

  public obtenerAlquileres():Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    return this._http.get('http://localhost:3000/api/alquiler', httpOptions);
  }

  public obtenerAlquilerPorId(id: string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    return this._http.get('http://localhost:3000/api/alquiler'+id, httpOptions);
  }

  public crearAlquiler(alquiler: Alquiler):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    let body: any = JSON.stringify(alquiler);
    return this._http.post('http://localhost:3000/api/alquiler', body, httpOptions);
  }

  public eliminarAlquiler(id: string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    return this._http.delete('http://localhost:3000/api/alquiler/'+id, httpOptions);
  }

  public modificarAlquiler(alquiler: Alquiler):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json'
      })
    }
    let body:any = JSON.stringify(alquiler);
    return this._http.put('http://localhost:3000/api/alquiler/'+alquiler._id, body, httpOptions)
  }

}
