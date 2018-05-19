Feature: Change stations

  Scenario: Change from one station to another
    Given two stations are configured:
      | BBC Radio 4       |
      | BBC Radio 6 Music |
    When the radio is turned on
    And the station is changed
    Then BBC Radio 6 Music should be playing
