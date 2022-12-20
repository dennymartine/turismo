import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { Sitio } from '../models/sitio';

@Injectable({
  providedIn: 'root'
})
export class SitioService {

  public url = 'http://localhost:3000';

  public sitios$ = new Subject<Sitio[]>();
  public sitio$ = new Subject<Sitio>();
  public sitios: Sitio[] = [];
  public sitio: Sitio = new Sitio();

  constructor( private http: HttpClient ) { }

  public all$(): Observable<Sitio[]> {
    return this.sitios$.asObservable();
  }

  public getSitio$(): Observable<Sitio> {
    return this.sitio$.asObservable();
  }

  public getSitio(id?: string): Observable<any> {
    return this.http.get<Sitio>(this.url + '/sitios/' + id)
    .pipe(
      map((response: any) => {
        this.sitio            = new Sitio();
        this.sitio.id         = response.id;
        this.sitio.nombre     = response.nombre;
        this.sitio.tipo       = response.tipo;
        this.sitio.ciudad     = response.ciudad;
        this.sitio.pais       = response.pais;
        this.sitio.direccion  = response.direccion;
        this.sitio$.next(this.sitio);
      })
    );
  }

  public all(): Observable<any> {
    this.sitios = [];
    return this.http.get<Sitio[]>(this.url + '/sitios')
      .pipe(
        map((res: any[]) => {
          res.forEach((response: any) => {
            this.sitio            = new Sitio();
            this.sitio.id         = response.id;
            this.sitio.nombre     = response.nombre;
            this.sitio.tipo       = response.tipo;
            this.sitio.ciudad     = response.ciudad;
            this.sitio.pais       = response.pais;
            this.sitio.direccion  = response.direccion;
            this.sitio.foto       = Math.floor(Math.random() * 10)
            this.sitios.push(this.sitio);
          });
          this.sitios$.next(this.sitios);
        })
      );
  }

  public createSitio(sitio: Sitio) {
    return this.http.post<Sitio>(this.url+'/sitios', sitio)
    .pipe(
      map((response: any) => {
        this.sitio            = new Sitio();
        this.sitio.id         = response.id;
        this.sitio.nombre     = response.nombre;
        this.sitio.tipo       = response.tipo;
        this.sitio.ciudad     = response.ciudad;
        this.sitio.pais       = response.pais;
        this.sitio.direccion  = response.direccion;
        this.sitio$.next(this.sitio);
      })
    );
  }

  public updateSitio(id: string, sitio: any) {
    return this.http.put<Sitio>(this.url+'/sitios/'+id, sitio);
  }

  deleteSitio(id?: string) {
    return this.http.delete(`${this.url}/sitios/${id}`)
  }
}
