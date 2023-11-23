package com.example.kaizevent.model;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Registration {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @Column(columnDefinition = "datetime")
    private LocalDateTime time;
    @ManyToOne
    @JoinColumn(name = "user_id",referencedColumnName = "id")
    private AppUser appUser;

    public Registration() {
    }

    public Registration(Long id, String name, LocalDateTime time, AppUser appUser) {
        this.id = id;
        this.name = name;
        this.time = time;
        this.appUser = appUser;
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

    public AppUser getAppUser() {
        return appUser;
    }

    public void setAppUser(AppUser appUser) {
        this.appUser = appUser;
    }

    public LocalDateTime getTime() {
        return time;
    }

    public void setTime(LocalDateTime time) {
        this.time = time;
    }
}
