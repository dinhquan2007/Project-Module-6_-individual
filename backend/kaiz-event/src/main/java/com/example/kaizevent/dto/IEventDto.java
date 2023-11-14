package com.example.kaizevent.dto;

import java.time.LocalDateTime;

public interface IEventDto {
    Long getId();
    String getName();
    LocalDateTime getDateStart();
    LocalDateTime getDateEnd();
    String getDescription();
    String getLocation();
    String getAddress();
    String getImage();
    Long getPrice();
    String getArea();

}
