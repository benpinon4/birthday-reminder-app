package com.birthday_app.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.birthday_app.entity.BirthdayReminder;
import com.birthday_app.service.BirthdayReminderService;

@RestController
public class BirthdayReminderController {
  
    @Autowired
    private BirthdayReminderService service;
  
    @PostMapping("/addBirthdayReminder")
    public BirthdayReminder addBirthdayReminder(@RequestBody BirthdayReminder birthdayReminder) {
        return service.saveBirthdayReminder(birthdayReminder);
    }
  
    @PostMapping("/addBirthdayReminders")
    public List<BirthdayReminder> addBirthdayReminders(@RequestBody List<BirthdayReminder> birthdayReminders) {
        return service.saveBirthdayReminders(birthdayReminders);
    }
    
    @GetMapping("/BirthdayReminders")
    public List<BirthdayReminder> findAllBirthdayReminders() {
        return service.getBirthdayReminders();
    }
    
    
    @GetMapping("/BirthdayReminderByReminderId/{remdinderId}")
    public BirthdayReminder findBirthdayReminderByReminderId(@PathVariable int remdinderId) {
        return service.getBirthdayReminderById(remdinderId);
    }
  
      
    @GetMapping("/BirthdayReminder/{firstName}") 
      public BirthdayReminder findBirthdayReminderByFirstName(@PathVariable String firstName) { return
      service.getBirthdayReminderByFirstName(firstName); }
       
  
    @PutMapping("/update/{reminderId}")
    public BirthdayReminder updateBirthdayReminder(@RequestBody BirthdayReminder birthdayReminder) {
        return service.updateBirthdayReminder(birthdayReminder);
    }
  
    @DeleteMapping("/delete/{reminderId}")
    public String deleteBirthdayReminder(@PathVariable int reminderId) {
        return service.deleteBirthdayReminder(reminderId);
    }
}