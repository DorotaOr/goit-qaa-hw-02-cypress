Feature: Online Order Placement and Status Updates
Scenario: Placing and Online Order

Given I am a registered customer

And I am logged into the online store

And there are available groups of products

And I choose one group of products I am interested in

And there is a list of products for purchase

When I add a chosen product to my cart

And I proceed to the chackout process

And I provide the necessary order details

And I confirm my order

Then my order should be successfully placed

And I pay for order

And I should receive an order confirmation email