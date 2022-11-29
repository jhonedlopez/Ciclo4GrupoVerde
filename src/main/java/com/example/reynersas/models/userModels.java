package com.example.reynersas.models;

//import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="Proveedores")

public class userModels {

    @Id
    private String _id;
    private String Nombre;
    private String Pais;
    private String Ciudad;
    private Double Precio;
    private Double Descuento;
    private int Plazo_dias_pago;
    private Double Cantidad_en_Kilos;
    private Double Costo_transporte;
    private int Tiempo_de_Entrega;
    private Double Materia_defectuosa;

    public userModels() {
    }


    public String get_id() {
        return _id;
    }
    public void set_id(String _id) {
        this._id = _id;
    }
    public String getNombre() {
        return Nombre;
    }
    public void setNombre(String nombre) {
        Nombre = nombre;
    }
    public String getPais() {
        return Pais;
    }
    public void setPais(String pais) {
        Pais = pais;
    }
    public String getCiudad() {
        return Ciudad;
    }
    public void setCiudad(String ciudad) {
        Ciudad = ciudad;
    }
    public Double getPrecio() {
        return Precio;
    }
    public void setPrecio(Double precio) {
        Precio = precio;
    }
    public Double getDescuento() {
        return Descuento;
    }
    public void setDescuento(Double descuento) {
        Descuento = descuento;
    }
    public int getPlazo_dias_pago() {
        return Plazo_dias_pago;
    }
    public void setPlazo_dias_pago(int plazo_dias_pago) {
        Plazo_dias_pago = plazo_dias_pago;
    }
    public Double getCantidad_en_Kilos() {
        return Cantidad_en_Kilos;
    }
    public void setCantidad_en_Kilos(Double cantidad_en_Kilos) {
        Cantidad_en_Kilos = cantidad_en_Kilos;
    }
    public Double getCosto_transporte() {
        return Costo_transporte;
    }
    public void setCosto_transporte(Double costo_transporte) {
        Costo_transporte = costo_transporte;
    }
    public int getTiempo_de_Entrega() {
        return Tiempo_de_Entrega;
    }
    public void setTiempo_de_Entrega(int tiempo_de_Entrega) {
        Tiempo_de_Entrega = tiempo_de_Entrega;
    }
    public Double getMateria_defectuosa() {
        return Materia_defectuosa;
    }
    public void setMateria_defectuosa(Double materia_defectuosa) {
        Materia_defectuosa = materia_defectuosa;
    }


    
}