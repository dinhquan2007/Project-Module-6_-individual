package com.example.kaizevent.dto;

import java.time.LocalDateTime;

public interface TicketDto {
    String getEvent();
    LocalDateTime getStart();
    LocalDateTime getEnd();
    String getImage();
    String getLocation();
    String getAddress();
    String getArea();
    Long getPrice();
}
