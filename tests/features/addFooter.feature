Feature: add footer
    As an admin
    I want to add new footer
    So that I can view the footer
    
  Scenario: add a new footer
    Given user "admin" has logged in to the admin panel with following credentials:
      | email           | password    |
      | admin@admin.com | admin123456 |
    When user "admin" adds a new footer with following details:
      | description | address | contactNo  |
      | Footer desc | Pokhara | 9867695601 |
    Then the footer description "Footer desc" should show up in store website