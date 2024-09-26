package com.birthday_app.dtos;

import lombok.Data;

@Data
public class BirthdayReminderDto {
    private int reminderId;
    private int userId;
    private String firstName;
    private String lastName;
    private String birthDate;
    private String descript;
}
