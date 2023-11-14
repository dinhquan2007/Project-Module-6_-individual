package com.example.kaizevent.model;

import javax.persistence.*;

@Entity
public class Artist {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String pathImage;
    @ManyToOne
    @JoinColumn(name = "type",referencedColumnName = "id")
    private TypeArtist typeArtist;

    public Artist() {
    }

    public Artist(Long id, String name, String pathImage, TypeArtist typeArtist) {
        this.id = id;
        this.name = name;
        this.pathImage = pathImage;
        this.typeArtist = typeArtist;
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

    public String getPathImage() {
        return pathImage;
    }

    public void setPathImage(String pathImage) {
        this.pathImage = pathImage;
    }

    public TypeArtist getTypeArtist() {
        return typeArtist;
    }

    public void setTypeArtist(TypeArtist typeArtist) {
        this.typeArtist = typeArtist;
    }
}
