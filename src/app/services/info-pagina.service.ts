import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-paginas-interfaces';


@Injectable(
  
)
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];

  constructor( private http: HttpClient) { 
    //Leer json
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    this.http.get('assets/data/data-pagina.json').
      subscribe((resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
      });
  }
  
  private cargarEquipo() {
    this.http.get('https://angular-html-9adb3.firebaseio.com/team.json').
    subscribe( ( resp: any[] ) => {
       this.equipo = resp;       
    });
  }
}
