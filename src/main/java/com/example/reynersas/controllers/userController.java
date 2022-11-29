package com.example.reynersas.controllers;

import java.util.ArrayList;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
// import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.reynersas.models.userModels;
import com.example.reynersas.services.userService;

@RestController
@RequestMapping("/Proveedores")
public class userController {

    @Autowired
    userService userService;

    @PostMapping
    public userModels insertarproveedor(@Validated @RequestBody userModels Proveedores){
        return this.userService.insertarproveedor(Proveedores);
    }
        
    @GetMapping
    public ArrayList<userModels> listarproveedores(){
        return userService.listarproveedor();
    }

    @GetMapping(path = "{id}")
    public Optional<userModels> obtenerporID(@Validated @PathVariable("id") String id){
        return this.userService.obtenerporID(id);
    }

    @GetMapping("/query")
    public ArrayList<userModels> listarproveedorpornombre(@Validated @RequestParam String Nombre){
        return this.userService.listarproveedorpornombre(Nombre);
    }

    // @DeleteMapping(path = "/{id}")
    // public String eliminarproveedorporid(@PathVariable("id") String id){
    //     boolean ok = this.userService.eliminarproveedorporid(id);
    //     if(ok){
    //         return"Se elimino con exito";
    //     }else{
    //         return "No se elimino el registro";
    //     }
    // }

}
