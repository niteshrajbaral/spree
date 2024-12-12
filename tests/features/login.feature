Feature:login
        As a admin 
        I want to login with
        Email and Password

Background:
        Given the admin has navigated to the login page

Scenario: login with valid credentials
        When the admin logs in the email "admin@admin.com" and password "admin"
        Then admin should be displayed homepage

Scenario: login with invalid credentials
        When the admin logs in the email "user@user.com" and password "admin"
        Then error message "Invalid credentials" should be shown

        
