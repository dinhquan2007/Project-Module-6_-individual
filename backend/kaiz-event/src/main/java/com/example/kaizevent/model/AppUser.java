package com.example.kaizevent.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class AppUser {
    @Id
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "email")
    private String email;
    @Column(name = "flag_deleted")
    private Boolean flagDeleted;
    @Column(name = "flag_online")
    private Boolean flagOnline;
    @Column(name = "username")
    private String username;
    @Column(name = "password")
    private String password;

    public AppUser() {
    }

    public AppUser(Long id, String name, String email, Boolean flagDeleted, Boolean flagOnline, String username, String password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.flagDeleted = flagDeleted;
        this.flagOnline = flagOnline;
        this.username = username;
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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
}