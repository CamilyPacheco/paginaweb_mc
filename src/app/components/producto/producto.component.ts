import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  prod:any={};

  constructor(private activatedRoute:ActivatedRoute,private _prdservices:ProductosService) {
    this.activatedRoute.params.subscribe(params =>{
      this.prod=this._prdservices.getproduct(params['id']);
      console.log(this.prod);
    });
    
  }
}
