package com.birthday_app.repository;





import org.springframework.data.jpa.repository.JpaRepository;

import com.birthday_app.entity.BirthdayReminder;

public interface BirthdayReminderRepository extends JpaRepository<BirthdayReminder,Integer> {
 
    BirthdayReminder findByFirstName(String name);

 
}