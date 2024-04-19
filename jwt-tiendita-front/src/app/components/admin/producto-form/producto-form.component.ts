import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';

interface HtmlInputEvent extends Event{
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {

  file:File
  photoSelected: string | ArrayBuffer

  producto = {
    nombre:"algo",
    descripcion:"algo",
    precio: 2
  }

  constructor(private productoService: ProductoService, private router: Router) { }

  ngOnInit() {
  }

  fotoSeleccionada(event:HtmlInputEvent): void{
    if(event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0];

      //vista previa
      const reader = new FileReader()
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  subirProducto(nombre: HTMLInputElement, descripcion: HTMLTextAreaElement,  precio: HTMLInputElement){
    
    this.productoService.createProducto(nombre.value, descripcion.value, precio.value, this.file)
      .subscribe(
        res => {
          console.log(res)
          this.router.navigate(['/admin'])
      }, 
        err => {
          console.log(err)
      });

    return false;
  }

}
