import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { CrearproveedorserviceService } from './crearproveedorservice.service';





@Component({
  selector: 'app-crear-proveedor',
  templateUrl: './crear-proveedor.component.html',
  styleUrls: ['./crear-proveedor.component.css']
})
export class CrearProveedorComponent implements OnInit{
  titulo = "Registro de Proveedor";
  // postId=0;
  
  
  datosformulario = new FormGroup({
    nombre: new FormControl(""),
    pais: new FormControl(""),
    ciudad: new FormControl(""),
    cantidad_en_kilos: new FormControl(""),
    costo_transporte: new FormControl(""),
    materia_defectuosa: new FormControl(""),
    tiempo_de_entrega: new FormControl(""),
    descuento: new FormControl(""),
    plazo_dias_pago: new FormControl(""),
    precio: new FormControl("")
 });


 recibirdatos(){
  // alert(this.datosformulario.value.nombre);
  let nombre1 = this.datosformulario.value.nombre;
  let pais1 = this.datosformulario.value.pais;
  let ciudad1 = this.datosformulario.value.ciudad;
  let cantidad_en_kilos1 = this.datosformulario.value.cantidad_en_kilos;
  let costo_transporte1 = this.datosformulario.value.costo_transporte;
  let materia_defectuosa1 = this.datosformulario.value.materia_defectuosa;
  let tiempo_de_entrega1 = this.datosformulario.value.tiempo_de_entrega;
  let descuento1 = this.datosformulario.value.descuento;
  let plazo_dias_pago1 = this.datosformulario.value.plazo_dias_pago;
  let precio1 = this.datosformulario.value.precio;
  alert(this.datosformulario.value.nombre);
  this.crearproveedorserviceservice.Insertardatos(this.datosformulario).subscribe(datos=>{alert("Insertado con exito");});
  // this.crearproveedorserviceservice.Insertardatos(this.datosformulario);

 }
constructor(private crearproveedorserviceservice: CrearproveedorserviceService){}
ngOnInit(): void {
}
}
