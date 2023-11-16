package com.example.kaizevent.controller;

import com.example.kaizevent.model.Area;
import com.example.kaizevent.service.IAreaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("api/area")
public class AreaController {
    @Autowired
    private IAreaService areaService;
    @GetMapping("/list/{id}")
    public ResponseEntity<List<Area>> getAllArea(@PathVariable (name = "id") Long id){
        List<Area> areaList=areaService.getAllByIdEvent(id);
        return new ResponseEntity<>(areaList, HttpStatus.OK);
    }
}
