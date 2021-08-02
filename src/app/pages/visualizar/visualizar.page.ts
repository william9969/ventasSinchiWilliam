import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router ,NavigationExtras} from '@angular/router';
import { Producto } from 'src/app/domain/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.page.html',
  styleUrls: ['./visualizar.page.scss'],
})
export class VisualizarPage implements OnInit {
  producto:Producto= new Producto();


  constructor(private route:ActivatedRoute,
    private router:Router) 
  {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.queryParams){
        this.producto=this.router.getCurrentNavigation().extras.queryParams.producto;
      }
    })  
  }

  ngOnInit() {
  }
  agregarCarrito(){
    
      let params: NavigationExtras ={
        queryParams: {
          producto: this.producto
        }
      }
      this.router.navigate(['productos'], params);   
  }
  

  cancelar(){
   this.router.navigate(['productos']);
    
  }

}
