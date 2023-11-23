package com.example.kaizevent.controller;

import com.example.kaizevent.dto.TicketDto;
import com.example.kaizevent.service.ITicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("api/ticket")
public class TicketController {
    @Autowired
    private ITicketService ticketService;
    @GetMapping("/list")
    public ResponseEntity<List<TicketDto>> getListTicket(@RequestParam("id") Long id){
        List<TicketDto> ticketDtos=ticketService.getAllTicketById(id);
        return new ResponseEntity<>(ticketDtos, HttpStatus.OK);
    }
}
