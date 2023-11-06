package com.example.demo.tipo.controller;

import com.example.demo.person.model.Person;
import com.example.demo.person.repository.PersonRepository;
import com.example.demo.tipo.model.Tipo;
import com.example.demo.tipo.reppository.TipoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/tipo")
public class TipoController {
    @Autowired
    private TipoRepository tipoRepository;

    // hacer inyeccion de dependencia de GROUps

    @GetMapping
    public ResponseEntity<List<Tipo>> getTipos(){
        List<Tipo> tipos = tipoRepository.findAll();
        return ResponseEntity.ok(tipos);
    }


}
