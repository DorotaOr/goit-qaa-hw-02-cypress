// // Import wymaganych modułów:

// const assert = require("assert");

// const { Given, When, Then } = require("@cucumber/cucumber");

// module.export = {
//   default: '--format-options \'{"snippetInterface": "synchronous"}\'',
// };

// // step definition to metoda, która realizuje logikę kroku. Tekst w cudzysłowie, który jest przekazywany jako parametr do metody Given, jest taki sam jak nazwa kroku Gherkin, dzięki czemu Cucumber wie, jaką step definition odnieść do jakiego kroku.

// const { Given } = require("cucumber");
// Given("I have {int} cukes in my belly", function (cukes) {
//   console.log(`Cukes: ${cukes}`);
// });

// script dot. "is_it_friday.feature"
const assert = require("assert");

const { Given, When, Then } = require("@cucumber/cucumber");

function isItFriday(today) {
  if (today === "Friday") {
    return "Today is Friday";
  }

  return "Nope";
}

Given("today is Sunday", function () {
  this.today = "Sunday";
});

When("I ask whether it's Friday yet", function () {
  this.actualAnswer = isItFriday(this.today);
});

Then("I should be told {string}", function (expectedAnswer) {
  assert.strictEqual(this.actualAnswer, expectedAnswer);
});

// function isItFriday(today) {
//   if (today === "Friday") {
//     return "TGIF";
//   } else {
//     return "Nope";
//   }
// }
// Given("today is Friday", function () {
//   this.today = "Friday";
// });

// Given("today is a first summer month", function () {
//   console.log("Yes it is first summer month");
// });
