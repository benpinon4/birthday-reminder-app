package com.birthday_app.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.birthday_app.entity.BirthdayReminder;
import com.birthday_app.repository.BirthdayReminderRepository;

@Service
public class BirthdayReminderService {
    @Autowired
    private BirthdayReminderRepository repository;
  
    public BirthdayReminder saveBirthdayReminder(BirthdayReminder birthdayReminder) {
        return repository.save(birthdayReminder);
    }
  
    public List<BirthdayReminder> saveBirthdayReminders(List<BirthdayReminder> birthdayReminders) {
        return repository.saveAll(birthdayReminders);
    }
  
    public List<BirthdayReminder> getBirthdayReminders() {
        System.out.println("Finding all BirthdayReminders");
        return repository.findAll();
    }
  
    public BirthdayReminder getBirthdayReminderById(int reminderId) {
        return repository.findById(reminderId).orElse(new BirthdayReminder());
    }
  
      
      public BirthdayReminder getBirthdayReminderByFirstName(String name) { return
      repository.findByFirstName(name); }
       
  
    public String deleteBirthdayReminder(int remdinderId) {
        repository.deleteById(remdinderId);
        return "BirthdayReminder removed !! " + remdinderId;
    }
  
    public BirthdayReminder updateBirthdayReminder(BirthdayReminder birthdayReminder) {
        
        BirthdayReminder existingBirthdayReminder = repository.findById(birthdayReminder.getReminderId()).orElse(new BirthdayReminder());
        existingBirthdayReminder.setUserId(birthdayReminder.getUserId());
        existingBirthdayReminder.setFirstName(birthdayReminder.getFirstName());
        existingBirthdayReminder.setLastName(birthdayReminder.getLastName());
        existingBirthdayReminder.setBirthDate(birthdayReminder.getBirthDate());
        existingBirthdayReminder.setDescription(birthdayReminder.getDescription());
        System.out.println("Updating a Birthday Reminder" + birthdayReminder.getReminderId());
        System.out.println(existingBirthdayReminder);
        return repository.save(existingBirthdayReminder);
    }
}