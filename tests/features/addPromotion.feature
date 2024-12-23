Feature: add promotion
    As an admin
    I want to add new promotion 
    So that I can view and manage the promotions


  Scenario: add a new promotion
    Given user "admin" has logged in to the admin panel with following credentials:
      | email           | password    |
      | admin@admin.com | admin123456 |
    When user "admin" adds a new promotion with following details:
      | name     | code  | path | description     | limit |
      | New year | New50 | nrb  | new year coupon | 50    |
    Then the promotion name "New year" should show up in the list of promotion section
