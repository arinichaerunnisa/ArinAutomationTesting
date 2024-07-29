Feature: login to application 

    as a valid user 
    i want to login into application 

    Scenario: Valid Login 
        Given I open login page 
        When I submit login 
        Then I should see homepage

    