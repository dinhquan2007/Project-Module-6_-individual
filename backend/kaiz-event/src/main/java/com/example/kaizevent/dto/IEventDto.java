package com.example.kaizevent.dto;

import java.time.LocalDateTime;

public interface IEventDto {
    Long getId();
    String getName();
    String getArtist();
    LocalDateTime getStart();
    LocalDateTime getEnd();
    String getDescription();
    String getLocation();
    String getAddress();
    String getImage();
    Long getPrice();
    String getArea();

}
