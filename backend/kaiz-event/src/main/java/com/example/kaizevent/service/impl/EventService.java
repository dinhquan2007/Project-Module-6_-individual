package com.example.kaizevent.service.impl;

import com.example.kaizevent.dto.IEventDto;
import com.example.kaizevent.model.Event;
import com.example.kaizevent.repository.IEventRepository;
import com.example.kaizevent.service.IEventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Service
public class EventService implements IEventService {
    @Autowired
    private IEventRepository eventRepository;
    @Override
    public Page<IEventDto> getAll(Pageable pageable, String name, String location, String artist) {
        return eventRepository.getAll(pageable,name,location,artist);
    }
}
