import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/Producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private productoService: ProductoService, private router: Router) { }

  ngOnInit() {

    this.cargaProductos()

  }

  cargaProductos(){
    this.productoService.getProductos()
    .subscribe(
      res => {
        this.productos = res;
      },
      err => console.log(err)
    )
  }

  selectedCard(producto){
    console.log("producto id")
  }

}
