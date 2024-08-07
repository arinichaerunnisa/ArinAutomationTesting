Feature: searchbox

    as a valid user 
    i want to doing searchbox
@focus 
    Scenario: Using Searchbox 
        Given I open the homepage 
        When I type the keyword 
        Then I should see the result

    