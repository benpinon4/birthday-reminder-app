package com.birthday_app.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "BIRTHDAY_REMINDER")
public class BirthdayReminder {

    @Id
    @GeneratedValue
    private int reminderId;
    
    @Column(name = "user_id")
    private int userId;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "birth_date")
    private String birthDate;

    @Column(name = "descript")
    private String descript;
    // generate getters and setters

    /**
     * @return int return the reminderId
     */
    public int getReminderId() {
        return reminderId;
    }

    /**
     * @param reminderId the reminderId to set
     */
    public void setReminderId(int reminderId) {
        this.reminderId = reminderId;
    }

    /**
     * @return int return the userId
     */
    public int getUserId() {
        return userId;
    }

    /**
     * @param userId the reminderId to set
     */
    public void setUserId(int userId) {
        this.userId = userId;
    }

    /**
     * @return String return the firstName
     */
    public String getFirstName() {
        return firstName;
    }

    /**
     * @param firstName the firstName to set
     */
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    /**
     * @return String return the lastName
     */
    public String getLastName() {
        return lastName;
    }

    /**
     * @param lastName the lastName to set
     */
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }



    /**
     * @return String return the birthDate
     */
    public String getBirthDate() {
        return birthDate;
    }

    /**
     * @param birthDate the birthDate to set
     */
    public void setBirthDate(String birthDate) {
        this.birthDate = birthDate;
    }

    /**
     * @return String return the description
     */
    public String getDescription() {
        return descript;
    }

    /**
     * @param descript the description to set
     */
    public void setDescription(String descript) {
        this.descript = descript;
    }

    @Override
    public String toString() {
        return "reminderId [reminderId=" + reminderId + ", firstName=" + firstName + ", lastName=" + lastName
                 + ", userId=" + userId + ", birthDate=" + birthDate + ", description="
                + descript
                + "]";
    }

}