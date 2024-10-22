import { Component } from '@angular/core';
import { product, ProductosService } from '../../services/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productos:product[]=[];

  constructor(private _prodService:ProductosService, 
    private router:Router){
    

  }
  
  ngOnInit():void{
    this.productos=this._prodService.getproducts();
    console.log(this.productos);

  }

  verprod(idx:number){
    this.router.navigate(['/producto',idx]);
    console.log(idx);
  }
}
