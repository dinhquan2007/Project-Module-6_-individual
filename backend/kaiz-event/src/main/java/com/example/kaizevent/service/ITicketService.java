package com.example.kaizevent.service;

import com.example.kaizevent.dto.TicketDto;
import com.example.kaizevent.model.Ticket;

import java.util.List;

public interface ITicketService {
    void addTicket(Ticket ticket);

    List<TicketDto> getAllTicketById(Long id);
}
