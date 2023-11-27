package com.example.kaizevent.controller;

import com.example.kaizevent.dto.CartDto;
import com.example.kaizevent.dto.CartOderDto;
import com.example.kaizevent.dto.RegistrationDto;
import com.example.kaizevent.model.AppUser;
import com.example.kaizevent.model.Area;
import com.example.kaizevent.model.Registration;
import com.example.kaizevent.model.Ticket;
import com.example.kaizevent.service.IAppUserService;
import com.example.kaizevent.service.IAreaService;
import com.example.kaizevent.service.IRegistrationService;
import com.example.kaizevent.service.ITicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("api/regis")
public class RegistrationController {
    @Autowired
private IAppUserService appUserService;
    @Autowired
    private IRegistrationService registrationService;
    @Autowired
    private ITicketService ticketService;
    @Autowired
    private IAreaService areaService;
    @PostMapping("/create")
    public ResponseEntity<?> addRegistration(@RequestBody CartOderDto cart, @RequestParam("username") String username){
        int sum=0;
        AppUser appUser= appUserService.findByUsername(username);
        Registration registration=new Registration();
        registration.setTime(LocalDateTime.now());
        registration.setAppUser(appUser);
        Registration registration1= registrationService.save(registration);
        for (CartDto c : cart.getCartDtos()){
            Area area=areaService.getById(c.getId());
            areaService.save(area);
            area.setCapacity(area.getCapacity()-c.getQuantity());
            for (int i = 0; i < c.getQuantity(); i++) {
            ticketService.addTicket(new Ticket(area,registration1));
            }
        }
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @GetMapping("/history")
    public ResponseEntity<List<RegistrationDto>> getHistory(@RequestParam("username") String username){
        List<RegistrationDto> history=registrationService.getHistory(username);
        return new ResponseEntity<>(history,HttpStatus.OK);
    }
}
