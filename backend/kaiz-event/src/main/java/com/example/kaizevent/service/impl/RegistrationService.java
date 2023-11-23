package com.example.kaizevent.service.impl;

import com.example.kaizevent.dto.RegistrationDto;
import com.example.kaizevent.model.AppUser;
import com.example.kaizevent.model.Registration;
import com.example.kaizevent.repository.IRegistrationArtistRepository;
import com.example.kaizevent.service.IRegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegistrationService implements IRegistrationService {
    @Autowired
    private IRegistrationArtistRepository registrationArtistRepository;
    @Override
    public Registration save(Registration registration) {
       return registrationArtistRepository.save(registration);
    }

    @Override
    public List<RegistrationDto> getHistory(String username) {
        return registrationArtistRepository.getHistory(username);
    }
}
