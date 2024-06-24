import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Propietario } from '../models/propietario';

@Injectable({
  providedIn: 'root'
})
export class PropietarioService {

  constructor(private _http: HttpClient) { }

  public obtenerPropietarios():Observable<any>{
    let httpOption = {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json'
      })
    }
    return this._http.get('http://localhost:3000/api/propietario',httpOption);
  }

  public obtenerPropietarioPorId(id: string):Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this._http.get('http://localhost:3000/api/propietario/'+id,httpOption);
  }

  public crearPropietario(propietario: Propietario):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json'
      })
    }
    let body:any = JSON.stringify(propietario);
    return this._http.post('http://localhost:3000/api/propietario', body, httpOptions);
  }

  public editarPropietario(propietario: Propietario):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json'
      })
    }
    let body:any = JSON.stringify(propietario);
    return this._http.put('http://localhost:3000/api/propietario/'+propietario._id, body, httpOptions)
  }

  public deletePropietario(id: string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json'
      })
    }
    return this._http.delete('http://localhost:3000/api/propietario/'+id, httpOptions);
  }

}
