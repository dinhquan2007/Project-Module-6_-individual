package com.example.kaizevent.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Location {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String address;
    private Long rentCost;
    private int capacity;

    public Location() {
    }

    public Location(Long id, String name, String address, Long rentCost, int capacity) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.rentCost = rentCost;
        this.capacity = capacity;
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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Long getRentCost() {
        return rentCost;
    }

    public void setRentCost(Long rentCost) {
        this.rentCost = rentCost;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }
}
