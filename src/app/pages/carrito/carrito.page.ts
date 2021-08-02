import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  productos: any;
  constructor(private route:ActivatedRoute,private router:Router,) { 
    if (this.router.getCurrentNavigation().extras.queryParams){
      this.productos=this.router.getCurrentNavigation().extras.queryParams.productos;
      console.log(this.productos);
    }
  }

  ngOnInit() {
  }

}
