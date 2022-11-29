package com.example.reynersas.services;

import java.util.ArrayList;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.reynersas.models.userModels;
import com.example.reynersas.repositories.userRepository;

@Service
public class userService {
    @Autowired
    userRepository userRepository;
    
    //Metodo para insertar los proveedores, se llamas las propiedades del Modelo para crear la instancia
    public userModels insertarproveedor(userModels Proveedores){
        return this.userRepository.insert(Proveedores);
    }

    //Metodo para listar todos los proveedores
    public ArrayList<userModels> listarproveedor (){
        return (ArrayList<userModels>) this.userRepository.findAll();
    }
    
    //Metodo para listar por ID
    public Optional<userModels> obtenerporID(String id){
        return this.userRepository.findById(id);
    }

    //Metodo para listar por nombre
    public ArrayList<userModels> listarproveedorpornombre(String Nombre){
        return this.userRepository.findByNombre(Nombre);
    }

    // public boolean eliminarproveedorporid(String id) {
    //     return false;
    // }

}