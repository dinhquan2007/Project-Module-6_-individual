package com.example.kaizevent.service;


import com.example.kaizevent.model.AppUser;

public interface IAppUserService {

    AppUser findByUsername(String username);
}
