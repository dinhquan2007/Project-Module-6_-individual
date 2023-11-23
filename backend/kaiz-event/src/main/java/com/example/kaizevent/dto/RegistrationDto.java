package com.example.kaizevent.dto;

import java.time.LocalDateTime;

public interface RegistrationDto {
    String getEvent();
    LocalDateTime getStart();
    LocalDateTime getEnd();
    LocalDateTime getTime();
    Long getTotal();
    Integer getQuantity();
    Long getRegistration();
}
