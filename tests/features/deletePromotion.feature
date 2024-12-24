Feature: delete promotion
    As an admin
    I want to delete a promotion
    So that I manage the promotions


  Scenario: delete a promotion
    Given user "admin" has logged in to the admin panel with following credentials:
      | email           | password    |
      | admin@admin.com | admin123456 |
    And user "admin" added a new promotion with following details:
      | name     | code  | path | description     | limit |
      | New year | New50 | nrb  | new year coupon | 50    |
    When the user "admin" deletes the promotion "New year"
    Then the promotion "New year" should not be visible in promotions list
