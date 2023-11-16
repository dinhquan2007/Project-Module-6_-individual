package com.example.kaizevent.model;

import javax.persistence.*;

@Entity
public class ArtistEventDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "artist_id",referencedColumnName = "id")
    private Artist artist;
    @ManyToOne
    @JoinColumn(name = "event_id",referencedColumnName = "id")
    private Event event;

    public ArtistEventDetail() {
    }

    public ArtistEventDetail(Long id, Artist artist, Event event) {
        this.id = id;
        this.artist = artist;
        this.event = event;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Artist getArtist() {
        return artist;
    }

    public void setArtist(Artist artist) {
        this.artist = artist;
    }

    public Event getEvent() {
        return event;
    }

    public void setEvent(Event event) {
        this.event = event;
    }
}
