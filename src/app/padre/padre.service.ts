import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PadreService {

  constructor(private http: HttpClient) { }

  public enviarUsuario(datosUsuario: any){
    return this.http.post<any>(environment.url, datosUsuario);
  }

  public buscarUsuario(id:number){
    return this.http.get(environment.url + "?")
  }
}
