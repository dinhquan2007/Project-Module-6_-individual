package com.example.kaizevent.repository;

import com.example.kaizevent.dto.IEventDto;
import com.example.kaizevent.model.Event;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface IEventRepository extends JpaRepository<Event,Long> {
@Query(value = "SELECT \n" +
        "    e.id AS id,\n" +
        "    e.name AS name,\n" +
        "    e.date_start AS start,\n" +
        "    l.name AS location,\n" +
        "    l.address AS address,\n" +
        "    e.image AS image,\n" +
        "    GROUP_CONCAT(DISTINCT a.name) AS artist\n" +
        " FROM \n" +
        "    event e\n" +
        "        JOIN\n" +
        "    location l ON e.location_id = l.id\n" +
        "        JOIN\n" +
        "    artist_event_detail aed ON e.id = aed.event_id\n" +
        "        JOIN\n" +
        "    artist a ON aed.artist_id = a.id\n" +
        "WHERE\n" +
        "    e.name LIKE :name AND a.name LIKE :artist \n" +
        "        AND l.name LIKE :location\n" +
        "GROUP BY e.id " +
        "ORDER BY e.date_start DESC",nativeQuery = true)
    Page<IEventDto> getAll(Pageable pageable, @Param("name") String name,@Param("location") String location,@Param("artist") String artist);
@Query(value = "select * from event where event.id=:id",nativeQuery = true)
    Event findEventById(@Param("id") Long id);
}
