package com.example.kaizevent.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class UserRole {
    @Id
    private  Long id;
    @ManyToOne
    @JoinColumn(name = "role_id",referencedColumnName = "id")
    private AppRole appRole;
    @ManyToOne
    @JoinColumn(name = "user_id",referencedColumnName = "id")
    private AppUser appUser;

    public UserRole() {
    }

    public UserRole(Long id, AppRole appRole, AppUser appUser) {
        this.id = id;
        this.appRole = appRole;
        this.appUser = appUser;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public AppRole getAppRole() {
        return appRole;
    }

    public void setAppRole(AppRole appRole) {
        this.appRole = appRole;
    }

    public AppUser getAppUser() {
        return appUser;
    }

    public void setAppUser(AppUser appUser) {
        this.appUser = appUser;
    }
}
