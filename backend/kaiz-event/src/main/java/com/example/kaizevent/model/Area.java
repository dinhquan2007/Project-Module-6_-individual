package com.example.kaizevent.model;

import javax.persistence.*;

@Entity
public class Area {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private Long price;
    @ManyToOne
    @JoinColumn(name = "location_id",referencedColumnName = "id")
    private Location location;

    public Area() {
    }

    public Area(Long id, String name, Long price, Location location) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.location = location;
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

    public Long getPrice() {
        return price;
    }

    public void setPrice(Long price) {
        this.price = price;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }
}
