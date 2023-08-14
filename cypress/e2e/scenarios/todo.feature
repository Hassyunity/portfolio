Feature: Managing Todo Items

  Background:
    Given the user is on the todo app page

  Scenario: Display default todo items
    Then the user should see 2 default todo items
    And the first item should be "Pay electric bill"
    And the last item should be "Walk the dog"

  Scenario: Add a new todo item
    When the user adds a new todo item "Feed the cat"
    Then the user should see 3 todo items
    And the last item should be "Feed the cat"

  Scenario: Check off an item as completed
    When the user checks off the item "Pay electric bill"
    Then the item "Pay electric bill" should be marked as completed

  Scenario: Filter for uncompleted tasks
    Given the user has a checked task "Pay electric bill"
    When the user filters for uncompleted tasks
    Then the user should see 1 uncompleted task "Walk the dog"
    And the task "Pay electric bill" should not be visible

  Scenario: Filter for completed tasks
    Given the user has a checked task "Pay electric bill"
    When the user filters for completed tasks
    Then the user should see 1 completed task "Pay electric bill"
    And the task "Walk the dog" should not be visible

  Scenario: Delete all completed tasks
    Given the user has a checked task "Pay electric bill"
    When the user deletes all completed tasks
    Then the user should see 1 uncompleted task "Walk the dog"
    And the task "Pay electric bill" should not be visible
