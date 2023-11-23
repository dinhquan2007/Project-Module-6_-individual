package com.example.kaizevent.dto;

import com.example.kaizevent.model.Location;

public class CartDto {
    private Long id;
    private String name;
    private Location location;
    private Long price;
    private Integer quantity;
    private Integer capacity;

    public CartDto() {
    }

    public CartDto(Long id, String name, Location location, Long price, Integer quantity, Integer capacity) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.price = price;
        this.quantity = quantity;
        this.capacity = capacity;
    }

    public Integer getCapacity() {
        return capacity;
    }

    public void setCapacity(Integer capacity) {
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

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public Long getPrice() {
        return price;
    }

    public void setPrice(Long price) {
        this.price = price;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}
