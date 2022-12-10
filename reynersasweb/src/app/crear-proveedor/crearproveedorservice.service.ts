import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CrearproveedorserviceService {

  URL ='http://localhost:8080/Proveedores';

  Insertardatos(datosformulario: FormGroup<{ nombre: FormControl<string | null>; pais: FormControl<string | null>; ciudad: FormControl<string | null>; cantidad_en_kilos: FormControl<string | null>; costo_transporte: FormControl<string | null>; materia_defectuosa: FormControl<string | null>; tiempo_de_entrega: FormControl<string | null>; descuento: FormControl<string | null>; plazo_dias_pago: FormControl<string | null>; precio: FormControl<string | null>; }>){
  alert("Hola "+datosformulario.value.nombre);
  alert("Hola "+datosformulario.value.descuento);
  alert("Hola "+datosformulario.value.precio);
  return this.http.post(`${this.URL}`, { "nombre": datosformulario.value.nombre, "pais": datosformulario.value.pais, "ciudad": datosformulario.value.ciudad, "cantidad_en_kilos": datosformulario.value.cantidad_en_kilos, "costo_transporte": datosformulario.value.costo_transporte, "materia_defectuosa": datosformulario.value.materia_defectuosa, "tiempo_de_entrega": datosformulario.value.tiempo_de_entrega, "descuento": datosformulario.value.descuento, "plazo_dias_pago": datosformulario.value.plazo_dias_pago, "precio": datosformulario.value.precio});
  // alert("Hola 2 "+ datosformulario.value.nombre);
}

constructor(private http: HttpClient){}
}