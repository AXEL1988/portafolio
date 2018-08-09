import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interfaces';

@Injectable()
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];

  constructor( private http: HttpClient ) { 
    this.http.get('https://angular-html-9adb3.firebaseio.com/productos_idx.json').
    subscribe((resp: Producto[]) => {
      console.log(resp);
      this.productos = resp;
      this.cargando = false;    
    });
  }

}
