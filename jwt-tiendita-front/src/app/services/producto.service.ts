import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../models/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  URI = 'http://localhost:4000/api/productos';

  //URI = 'https://goris.herokuapp.com/api/productos'

  constructor(private http: HttpClient) { }

  createProducto(nombre: string, descripcion: string, precio:string, image: File){
    console.log("Enviando: " + nombre, descripcion, precio)
    const fd = new FormData();
    fd.append('nombre', nombre);
    fd.append('descripcion', descripcion);
    fd.append('precio', precio);
    fd.append('image', image)

    const data = {
      nombre: nombre,
      descripcion: descripcion,
      precio: precio
    }
    return this.http.post(this.URI, fd)  
  }
/*
  createProducto(producto){
    return this.http.post<any>(this.URI , producto)
  }*/

  getProductos() {
    return this.http.get<Producto[]>(this.URI);
  }

}
