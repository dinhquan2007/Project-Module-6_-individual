package com.example.kaizevent.dto;

import com.example.kaizevent.model.UserRole;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import java.util.Set;

public class AppUserDto implements Validator {
    private Long id;
    private String username;
    private String password;
    private String email;
    private Boolean flagDeleted;
    private Boolean flagOnline;
    private String name;
    private Set<UserRole> userRoleSet;

    public AppUserDto() {
    }

    public AppUserDto(Long id, String username, String password, String email, Boolean flagDeleted, Boolean flagOnline, String name, Set<UserRole> userRoleSet) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.flagDeleted = flagDeleted;
        this.flagOnline = flagOnline;
        this.name = name;
        this.userRoleSet = userRoleSet;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Boolean getFlagDeleted() {
        return flagDeleted;
    }

    public void setFlagDeleted(Boolean flagDeleted) {
        this.flagDeleted = flagDeleted;
    }

    public Boolean getFlagOnline() {
        return flagOnline;
    }

    public void setFlagOnline(Boolean flagOnline) {
        this.flagOnline = flagOnline;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<UserRole> getUserRoleSet() {
        return userRoleSet;
    }

    public void setUserRoleSet(Set<UserRole> userRoleSet) {
        this.userRoleSet = userRoleSet;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {

    }
}
