package com.example.kaizevent.service.impl;

import com.example.kaizevent.model.AppUser;
import com.example.kaizevent.repository.IAppUserRepository;
import com.example.kaizevent.service.IAppUserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class AppUserService  implements IAppUserService {
    @Autowired
    private IAppUserRepository appUserRepository;

    @Override
    public AppUser findByUsername(String username) {
        return appUserRepository.getAccountByUserName(username);
    }
}
