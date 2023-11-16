package com.example.kaizevent.repository;

import com.example.kaizevent.model.Area;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface IAreaRepository extends JpaRepository<Area, Long> {

    @Query(value = "SELECT " +
                        "    a.id," +
                        "    a.name, " +
                        "    a.price ," +
                        "    a.capacity," +
                        "    a.location_id " +
                        "FROM " +
                        "    area a " +
                        "         JOIN " +
                        "    location l ON a.location_id = l.id " +
                        "         JOIN " +
                        "    event e ON l.id=e.location_id " +
                        "WHERE " +
                        "    e.id = :id  order by a.price asc",nativeQuery = true)
    List<Area> getAllByIdEvent(@Param("id") Long id);
}
