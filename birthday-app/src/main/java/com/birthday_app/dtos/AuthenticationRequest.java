package com.birthday_app.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor          
public class AuthenticationRequest {
    private String userName;
    private String passWord;
}