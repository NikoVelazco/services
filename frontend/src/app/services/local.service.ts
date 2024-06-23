import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Local } from '../models/local';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor(private _http: HttpClient) { }

  public crearLocal(local: Local): Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    let body: any = JSON.stringify(local);
    return this._http.post('http://localhost:3000/api/local', body, httpOptions);
  }

  public obtenerLocales():Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    return this._http.get('http://localhost:3000/api/local', httpOptions);
  }

  public eliminarLocal(id: string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    return this._http.delete('http://localhost:3000/api/local/'+id, httpOptions);
  }

  public obtenerLocalPorId(id: string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    return this._http.get('http://localhost:3000/api/local/'+id, httpOptions);
  }

  modificarLocal(local: Local):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json'
      })
    }
    let body:any = JSON.stringify(local);
    return this._http.put('http://localhost:3000/api/local/'+local._id, body, httpOptions)
  }

}
