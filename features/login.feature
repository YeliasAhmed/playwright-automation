Feature: Login feature

  Background:
    Given I navigate to the application

  Scenario: Verify that home page is visible successfully
    Then I should see the home page title

  Scenario: Verify that Products page is accessible
    When I click on the Products button
    Then I should be navigated to ALL PRODUCTS page successfully
