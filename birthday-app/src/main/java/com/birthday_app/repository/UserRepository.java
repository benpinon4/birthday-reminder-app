package com.birthday_app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.birthday_app.entity.User;

public interface UserRepository extends JpaRepository<User,Integer> {
 
    Optional<User> findByUserName(String userName);

 
}
