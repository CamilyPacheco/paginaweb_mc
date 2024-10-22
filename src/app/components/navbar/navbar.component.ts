import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router:Router){
  }

  Buscar(termino:string){
    console.log(termino);
    this.router.navigate(['/buscar',termino]);
  }

}
