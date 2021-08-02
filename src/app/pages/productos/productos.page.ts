import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras,ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from 'src/app/domain/producto';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  productos: any;
  producto:any;
  addProductos:any;

  constructor(private route:ActivatedRoute,private router:Router, private productosService: ProductosService) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.queryParams){
        this.producto=this.router.getCurrentNavigation().extras.queryParams.producto;
        //this.addProductos.push(this.producto);
        console.log(this.producto)
      }
    })
  }
    
  
  
  ngOnInit() {
    this.productos=this.productosService.getProductos();
    console.log(this.productos)
    
    
  }
  visualizar(producto: any){
    let params: NavigationExtras ={
      queryParams: {
        producto: producto
      }
    }
    this.router.navigate(["visualizar"], params)
  }
  carritoCompras(){
    
    this.router.navigate(['carrito']); 
  }

}
