Feature: Playing stations

  Scenario: Play one station
    Given a station is configured
    When the radio is turned on
    Then the station should be playing

  @wip
  Scenario: Switch between stations
    Given two stations are configured:
      | BBC Radio 4       |
      | BBC Radio 6 Music |
    When the radio is turned on
    And the station is changed
    Then BBC Radio 6 Music should be playing
