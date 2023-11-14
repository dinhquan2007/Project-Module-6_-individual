package com.example.kaizevent.model;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private  String name;
    @Column(columnDefinition = "longtext")
    private  String image;
    @Column(columnDefinition = "datetime")
    private LocalDateTime dateStart;
    @Column(columnDefinition = "datetime")
    private LocalDateTime dateEnd;
    @Column(columnDefinition = "longtext")
    private String description;
    @ManyToOne
    @JoinColumn(name = "location_id" ,referencedColumnName = "id")
    private Location location;

    public Event() {
    }

    public Event(Long id, String name, LocalDateTime dateStart, LocalDateTime dateEnd, String description, Location location) {
        this.id = id;
        this.name = name;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.description = description;
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

    public LocalDateTime getDateStart() {
        return dateStart;
    }

    public void setDateStart(LocalDateTime dateStart) {
        this.dateStart = dateStart;
    }

    public LocalDateTime getDateEnd() {
        return dateEnd;
    }

    public void setDateEnd(LocalDateTime dateEnd) {
        this.dateEnd = dateEnd;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }
}
