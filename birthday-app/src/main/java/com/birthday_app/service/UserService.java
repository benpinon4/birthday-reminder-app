package com.birthday_app.service;

import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.birthday_app.dtos.UserDto;
import com.birthday_app.entity.User;
import com.birthday_app.repository.UserRepository;

import lombok.AllArgsConstructor;



@Service
@AllArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public ResponseEntity<UserDto> saveUser(UserDto dto) {
        User entity = new User();
        dto.setPassWord(passwordEncoder.encode(dto.getPassWord()));
        BeanUtils.copyProperties(dto, entity);
        User savedUser = userRepository.save(entity);
        dto.setPassWord("******");
        dto.setUserId(savedUser.getUserId());
        return ResponseEntity.ok(dto);
    }

    public boolean findByUsername(String username) {
        Optional<User> byUsername = userRepository.findByUserName(username);
        if (byUsername.isPresent()) {
            return true;
        }
        return false;
    }
    
    }
  

