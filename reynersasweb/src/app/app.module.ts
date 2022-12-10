import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { CrearProveedorComponent } from './crear-proveedor/crear-proveedor.component';
import { BasededatosComponent } from './basededatos/basededatos.component';
import { MenuComponent } from './menu/menu.component';
import { FiltrosComponent } from './filtros/filtros.component';
import { CrearproveedorserviceService } from './crear-proveedor/crearproveedorservice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    CrearProveedorComponent,
    BasededatosComponent,
    MenuComponent,
    FiltrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CrearproveedorserviceService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
