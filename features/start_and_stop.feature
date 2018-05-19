Feature: Start and stop

  Scenario: Play one station
    Given a station is configured
    When the radio is turned on
    Then the station should be playing

  Scenario: Stop
    Given a station is configured
    And the radio has been turned on
    When the radio is turned off
    Then nothing should be playing
