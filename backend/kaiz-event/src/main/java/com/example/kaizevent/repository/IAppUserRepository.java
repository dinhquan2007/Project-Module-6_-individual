package com.example.kaizevent.repository;

import com.example.kaizevent.model.AppUser;
import org.springframework.stereotype.Repository;

@Repository
public interface IAppUserRepository {
    AppUser findAppUserByName(String username);
}
