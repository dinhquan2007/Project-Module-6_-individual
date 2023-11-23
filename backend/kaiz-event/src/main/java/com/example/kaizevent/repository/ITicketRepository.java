package com.example.kaizevent.repository;

import com.example.kaizevent.dto.TicketDto;
import com.example.kaizevent.model.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ITicketRepository extends JpaRepository<Ticket,Long> {
    @Query(value = "SELECT \n" +
            "    e.name AS event,\n" +
            "    e.date_start AS start,\n" +
            "    e.image AS image,\n" +
            "    e.date_end AS end,\n" +
            "    l.name AS location,\n" +
            "    l.address AS address,\n" +
            "    a.name AS area,\n" +
            "    a.price AS price\n" +
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
            "   r.id=:id",nativeQuery = true)
    List<TicketDto> getTicketByIdRegistration(@Param("id")Long id);
}
