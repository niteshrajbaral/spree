Feature: As a admin 
        I want to login with
        Email and Password

Scenario: Login with valid credentials
        Given the admin is given with credentials with email and password 
        When the admin enters the email "admin@admin.com" and password "admin"
        Then admin should be displayed homepage

Scenario: Login with invalid credentials
        Given the admin is given invalid email and password
        When the admin enters the email "user@user.com" and password "admin"
        Then admin should be displayed error login page

        
