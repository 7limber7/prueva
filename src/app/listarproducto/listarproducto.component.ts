import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-listarproducto',
  templateUrl: './listarproducto.component.html',
  styleUrls: ['./listarproducto.component.css']
})
export class ListarproductoComponent implements OnInit{
  productos : Producto[];

  ngOnInit() : void{
    this.obtenerProductos();
  }

  constructor(private productoServicio:ProductoService){}

  private obtenerProductos(){
    this.productoServicio.obtenerListadeProductos().subscribe(dato =>{
      this.productos = dato;
    });
  }


}

