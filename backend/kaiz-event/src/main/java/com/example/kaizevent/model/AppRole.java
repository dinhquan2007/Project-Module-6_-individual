package com.example.kaizevent.model;

import javax.persistence.*;

@Entity
public class AppRole {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "flag_deleted")
    private Boolean flagDeleted;
    @Column(name = "type")
    private String type;

    public AppRole() {
    }

    public AppRole(Long id, String name, Boolean flagDeleted, String type) {
        this.id = id;
        this.name = name;
        this.flagDeleted = flagDeleted;
        this.type = type;
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

    public Boolean getFlagDeleted() {
        return flagDeleted;
    }

    public void setFlagDeleted(Boolean flagDeleted) {
        this.flagDeleted = flagDeleted;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
