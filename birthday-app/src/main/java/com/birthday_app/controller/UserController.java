package com.birthday_app.controller;

import java.util.Objects;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.birthday_app.dtos.UserDto;
import com.birthday_app.exceptions.InvalidPayloadException;
import com.birthday_app.exceptions.UserIdAlreadyExistException;
import com.birthday_app.service.UserService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/auth")
@AllArgsConstructor
public class UserController {
  
    private final UserService userService;

    @PostMapping("/register")
    public ResponseEntity<UserDto> saveUser(@RequestBody UserDto userDto) {
        if (Objects.isNull(userDto)) {
            throw new InvalidPayloadException("Payload cannot be Null");
        }
        if(userService.findByUsername(userDto.getUserName())){
            throw new UserIdAlreadyExistException("Username is already taken");
        }
        return userService.saveUser(userDto);
    }
  
    // @PostMapping("/addBirthdayReminders")

}
