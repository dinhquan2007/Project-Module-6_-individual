package com.example.kaizevent.service;

import org.springframework.security.core.userdetails.UserDetails;

public interface IAppUserService {
    UserDetails loadUserByUsername(String username);
}
