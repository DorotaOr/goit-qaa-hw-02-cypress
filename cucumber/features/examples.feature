Feature: Is it Friday yet? (Zaleca się użycie nazwy podobnej do nazwy pliku.)

Everybody wants to know when it's Friday (Krótki opis funkcji, którego Cucumber nie wykonuje, ponieważ jest to dokumentacja.)

Scenario: Sunday isn't Friday (scenariusz, czyli konkretny przykład ilustrujący, jak powinno zachowywać się oprogramowanie.)

Given today is Sunday (Cucumber wykona tylko Given, When i Then)

When I ask whether it's Friday yet

Then I should be told "Nope"


Scenario: Friday is Friday

Given today is Friday

When I ask whether it's Friday yet

Then I should be told "TGIF"

Background:

Given today is a first summer month


CAŁY SCRIPT:
Feature: Is it Friday yet?

Everybody wants to know when it's Friday

Background:

Given today is a first summer month

Scenario: Sunday is not Friday

Given today is "Sunday"

When I ask whether it's Friday yet

Then I should be told "Nope"

Scenario: Friday is Friday

Given today is "Friday"

When I ask whether it's Friday yet

Then I should be told "TGIF"