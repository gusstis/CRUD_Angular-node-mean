import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from '../../services/producto.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {
  listProductos: Producto [] = [];

  constructor( private _productoService: ProductoService,
    private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this._productoService.getProductos().subscribe(data => {
      console.log(data);
      this.listProductos = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarProducto(id: any) {
    this._productoService.eliminatProducto(id).subscribe(data => {
      this.toastr.error( 'El producto fue elminado exitosamente', 'Producto eliminado' );
      this.obtenerProductos();
    }, error => {
      console.log(error);
    })
  }

}
