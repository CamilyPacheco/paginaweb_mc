import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoComponent } from './components/producto/producto.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'productos', component:ProductosComponent},
  {path: 'producto/:id', component:ProductoComponent},
  {path: 'buscar/:termino', component:BuscadorComponent},


  {path: '**',pathMatch:'full',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
