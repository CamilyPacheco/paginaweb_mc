import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() {
    console.log("Serivce listo para usar..!");
   }


   private productos: product[] = [
    {
      nombre: "Hamburguesa Doble Carne",
      desc: "Contiene doble carne especial",
      precio: 5.99,
      img: "https://www.tqma.com.ec/images/com_yoorecipe/banner_superior/15075_1.jpg"
    },
    {
      nombre: "Combo Big Mac",
      desc: "Incluye una Big Mac, papas medianas y bebida",
      precio: 7.49,
      img: "https://images.rappi.com.ec/restaurants_background/mcdonaldscol-1660251351290.jpg"
    },
    {
      nombre: "Nuggets de Pollo",
      desc: "10 piezas de nuggets de pollo",
      precio: 4.99,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQg3_hGLGqStmHQP-quH0nFf1iB1ZoX50-nw&s"
    },
    {
      nombre: "Papas Fritas Grandes",
      desc: "Papas fritas crujientes tamaño grande",
      precio: 2.99,
      img: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$ktX5ZYyM/200/200/original?country=ec"
    },
    {
      nombre: "McFlurry Oreo",
      desc: "Helado con trozos de galleta Oreo",
      precio: 3.49,
      img: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$ktXeRE1g/200/200/original?country=ec"
    }
  ];
  

  

  getproducts():any{
    return this.productos;
  }

  getproduct(idx: number):any{
    return this.productos[idx];
  }

  
  //FUNCION PARA OBTENER UN ARREGLO DE LAS BUSQUEDAS
  buscarproducts(termino: string):product[]{
    let producArreglo:product[]=[];
    termino=termino.toLowerCase();
    for(let pr of this.productos){
      let nombre = pr.nombre.toLowerCase();
      if(nombre.indexOf(termino)>=0){
        producArreglo.push(pr)
      }
    }
    return producArreglo;
  }

}
export interface product{
  nombre: string; 
  desc: string;
  precio:number;
  img: string;

}

