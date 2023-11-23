package com.example.kaizevent.service;

import com.example.kaizevent.dto.RegistrationDto;
import com.example.kaizevent.model.Registration;

import java.util.List;

public interface IRegistrationService {
    Registration save(Registration registration);

    List<RegistrationDto> getHistory(String username);
}
