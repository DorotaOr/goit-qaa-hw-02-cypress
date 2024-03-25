Scenarios in gherkin format

Feature: ....... (opisuje sekcję albo moduł produktu)
Scenario: Some cukes (scenariusze na jeden temat, połączone w funkcji (feature))
Given Given I have 48 cukes in my belly (Scenariusz zawiera kroki - Steps, które zaczynają się od słów Given, When, Then)

Given user goes to "Login" page (Cudzysłów nie jest wymagany przez syntaks, ale ułatwia natychmiastowe zauważenie, które ze słów jest przekazywane - to parametr metody.)

Scenario: eat 5 out of 12
  Given there are 12 cucumbers (uwarunkowania wstępne (initial context))
  When I eat 5 cucumbers (działania, które będą wykonywane)
  Then I should have 7 cucumbers (oczekiwany rezultat (walidacja albo assertion))

Scenario: eat 5 out of 20
  Given there are 20 cucumbers
  When I eat 5 cucumbers
  Then I should have 15 cucumbers

  (Jeśli scenariusz jest data-driven, czyli napędza w cyklu jakieś zbiory danych, to jest on nazywany Scenario Outline i towarzyszy mu tabela Examples po opisie wszystkich kroków:)
  Scenario Outline: eating
  Given there are <start> cucumbers
  When I eat <eat> cucumbers
  Then I should have <left> cucumbers

  Examples:
    | start | eat | left | - nazwy zmiennych
    |    12 |   5 |    7 | - wartości zmiennych w pierwszej iteracji testu
    |    20 |   5 |   15 |- wartości zmiennych w drugiej iteracji testu

    Scenario Outline: Scenario name`

Given user fills form A with <key1> form B with <key2> and from C with <key3>

Examples: table name

|key1|key2|key3|

|val1 |val2 |val3|

(Tekst wieloliniowy (Multiline Text): do kroków można dodawać duże akapity tekstu w potrójnym cudzysłowie:)
Given user enters name and password`

"""
GoIT Cucumber JS Introduction
Topic – Multiline Text
"""

Given courses are created

| coursename |technology|
| Course1    | QA       |
| Course2    | AQA      |

(Background: To część tekstu, która jest realizowana przed KAŻDYM scenariuszem w funkcji (feature). Można stworzyć tylko jeden background na feature. Zazwyczaj jest to używane do doprowadzenia systemu do pożądanego stanu do testowania scenariuszy tej funkcji.)
Background:
    Given temporary user is created
Scenario:
    Given temporary user goes to "Login" page

(Tags (tagi) pozwalają oznaczać funkcje i scenariusze. Tag @skip dla scenariusza, który jest opracowywany, pomija realizację wszystkich scenariuszy z tym tagiem w parametrach wiersza uruchamiania testów: cucumber-js --tags 'not @skip’ Ablo odwrotnie, wykonać tylko testy, które dotyczą pewnej funkcji: cucumber-js --tags ‘@login’ Tagi na poziomie funkcji są stosowane do wszystkich scenariuszy tej funkcji. W przykładzie poniżej, do scenariusza “Scenario: Positive Login” są stosowane tagi poziomu funkcji - @login, @regression oraz poziomu scenariusza - @smoke)
@login @regression
Feature: Login
@smoke
Scenario: Positive Login
    Given user logs in

(Pierwszy pełny scenariusz)
Feature: Calculator
 
#Calculator for adding two numbers
 
@positive
Scenario Outline: Add two numbers
#Add two numbers using the calculator
    Given user enters <First> into the calculator
    And user enters <Second> into the calculator
    When user presses "add"
    Then the result should equal <Result> on the screen
Examples:
| First | Second | Result |
| 40    | 70     | 110    |
| 30    | 40     | 70     |
| 60    | 30     | 90     |
