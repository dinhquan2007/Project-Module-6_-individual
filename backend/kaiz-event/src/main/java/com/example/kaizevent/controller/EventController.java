package com.example.kaizevent.controller;

import com.example.kaizevent.dto.IEventDto;
import com.example.kaizevent.model.Event;
import com.example.kaizevent.service.IEventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@RestController
@CrossOrigin("*")
@RequestMapping("api/event")
public class EventController {
    @Autowired
    private IEventService eventService;
    @GetMapping
    public ResponseEntity<Page<IEventDto>> getAllEvent(
            @RequestParam(name = "name_like",defaultValue = "",required = false)String name,
            @RequestParam(name = "location_like" ,defaultValue = "",required = false)String location,
//            @RequestParam(name = "date_start",required = false) LocalDateTime dateStart,
//            @RequestParam(name = "date_end",required = false) LocalDateTime dateEnd,
            @RequestParam(name = "artist_like",required = false) String artist,
            @RequestParam(name = "page",defaultValue = "0",required = false) Integer page
            ){
        Pageable pageable= PageRequest.of(page,8, Sort.by("dateStart").descending());
        Page<IEventDto> eventPage=eventService.getAll(pageable,name,location,artist);
        return new ResponseEntity<>(eventPage, HttpStatus.OK);
    }
}
