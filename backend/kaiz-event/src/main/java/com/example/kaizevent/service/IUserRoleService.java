package com.example.kaizevent.service;

import com.example.kaizevent.model.UserRole;

public interface IUserRoleService {
    void createUserRole(UserRole userRole);
    String findRoleByUsername(String username);
}
