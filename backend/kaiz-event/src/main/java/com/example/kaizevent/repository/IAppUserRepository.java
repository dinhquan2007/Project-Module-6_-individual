package com.example.kaizevent.repository;

import com.example.kaizevent.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface IAppUserRepository extends JpaRepository<AppUser, Long> {
    @Query(value = "select * from app_user a where a.username = :username ", nativeQuery = true)
    AppUser getAccountByUserName(@Param("username") String userName);

//    void createAccount(String username, String encode, long l);
}
