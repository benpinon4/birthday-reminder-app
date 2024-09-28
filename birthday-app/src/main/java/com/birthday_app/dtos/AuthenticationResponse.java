package com.birthday_app.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter     
public class AuthenticationResponse {
    final private String jwt;
    
}

