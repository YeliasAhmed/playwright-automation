Feature: Login feature

  Scenario: Verify that home page is visible successfully
    Given I launch the browser
    When I navigate to the application
    Then I should see the home page title

  Scenario: Verify that Products page is accessible
    Given I launch the browser
    When I navigate to the application
    And I click on the Products button
    Then I should be navigated to ALL PRODUCTS page successfully
