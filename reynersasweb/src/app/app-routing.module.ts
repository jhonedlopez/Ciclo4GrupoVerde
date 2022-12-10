import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasededatosComponent } from './basededatos/basededatos.component';
import { CrearProveedorComponent } from './crear-proveedor/crear-proveedor.component';
import { FiltrosComponent } from './filtros/filtros.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';

const routes: Routes = [
  {path: "home", component: PaginaPrincipalComponent},
  {path: "", component: PaginaPrincipalComponent},
  {path: "abrirbase", component: BasededatosComponent},
  {path: "crear", component: CrearProveedorComponent},
  {path: "buscar", component: FiltrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
