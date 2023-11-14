package com.example.kaizevent.service;

import com.example.kaizevent.dto.IEventDto;
import com.example.kaizevent.model.Event;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.time.LocalDate;
import java.time.LocalDateTime;

public interface IEventService {
    Page<IEventDto> getAll(Pageable pageable, String name, String location, String artist);
}
