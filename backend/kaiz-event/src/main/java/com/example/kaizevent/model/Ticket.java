package com.example.kaizevent.model;

import javax.persistence.*;

@Entity
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "area_id",referencedColumnName = "id")
    private Area area;
    @ManyToOne
    @JoinColumn(name = "registration_id",referencedColumnName = "id")
    private Registration registration;

    public Ticket() {
    }

    public Ticket(Long id, Area area, Registration registration) {
        this.id = id;
        this.area = area;
        this.registration = registration;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public Area getArea() {
        return area;
    }

    public void setArea(Area area) {
        this.area = area;
    }

    public Registration getRegistration() {
        return registration;
    }

    public void setRegistration(Registration registration) {
        this.registration = registration;
    }
}
