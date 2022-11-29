package com.example.reynersas.repositories;

import java.util.ArrayList;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.reynersas.models.userModels;

public interface userRepository extends MongoRepository<userModels, String>{

    public abstract ArrayList<userModels> findByNombre(String Nombre);
    public abstract ArrayList<userModels> findByPrecio(Double precio);
    
}