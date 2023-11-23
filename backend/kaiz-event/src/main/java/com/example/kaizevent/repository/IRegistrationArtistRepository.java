package com.example.kaizevent.repository;

import com.example.kaizevent.dto.RegistrationDto;
import com.example.kaizevent.model.Registration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IRegistrationArtistRepository extends JpaRepository<Registration,Long> {
@Query(value = "SELECT \n" +
        "    e.name AS event,\n" +
        "    e.date_start AS start,\n" +
        "    e.date_end AS end,\n" +
        "    SUM(a.price) AS total,\n" +
        "    r.id AS registration,\n" +
        "    r.time AS time,\n" +
        "    COUNT(*) AS quantity\n" +
        "FROM\n" +
        "    ticket t\n" +
        "        JOIN\n" +
        "    area a ON t.area_id = a.id\n" +
        "        JOIN\n" +
        "    location l ON a.location_id = l.id\n" +
        "        JOIN\n" +
        "    event e ON e.location_id = l.id\n" +
        "        JOIN\n" +
        "    registration r ON r.id = t.registration_id\n" +
        "        JOIN\n" +
        "    app_user u ON r.user_id = u.id\n" +
        "WHERE\n" +
        "    u.username = :username \n" +
        "GROUP BY r.id , e.name , e.date_start , e.date_end\n" +
        "ORDER BY r.id DESC\n",nativeQuery = true)
    List<RegistrationDto> getHistory(@Param("username") String username);
}
