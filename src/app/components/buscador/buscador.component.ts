import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent implements OnInit {

  termino:string="";
  prod:any[]=[]
  
  constructor(private activatedRoute:ActivatedRoute, private producService: ProductosService,
    private router:Router
    
  ){

  }

  ngOnInit(){
    this.activatedRoute.params.subscribe(params=>{
      this.termino= params['termino'];
      this.prod= this.producService.buscarproducts(params['termino']);
      console.log(this.prod);

    });
  }

  
  

}
