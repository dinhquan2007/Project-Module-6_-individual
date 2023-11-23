package com.example.kaizevent.service.impl;

import com.example.kaizevent.dto.TicketDto;
import com.example.kaizevent.model.Ticket;
import com.example.kaizevent.repository.ITicketRepository;
import com.example.kaizevent.service.ITicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TicketService implements ITicketService {
    @Autowired
    private ITicketRepository ticketRepository;

    @Override
    public void addTicket(Ticket ticket) {
        ticketRepository.save(ticket);
    }

    @Override
    public List<TicketDto> getAllTicketById(Long id) {
        return ticketRepository.getTicketByIdRegistration(id);
    }
}
