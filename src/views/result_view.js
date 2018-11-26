PubSub = require('../helpers/pub_sub.js')

//ResultView deals with allowing the user to see the result of checking if the number they submitted is a prime number or not.
//It recieves whether the number is true or false by subscribing to the PrimeChecker:PrimeResult channel - which is sent from the PrimeChecker model.
//When the channel comes through it isolates the payload by using .detail. The result is stored in a variable called primeResult and is displayed to the user using the displayPrimeOrNot method which adds textcontent to the relevant part of the screen, as isoloated by the document.querySelector(location) method. 

const ResultView = function () {

};


ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeChecker:PrimeResult', (event) => {
    const primeResult = event.detail;
    this.displayPrimeOrNot(primeResult)
  })
};


ResultView.prototype.displayPrimeOrNot = function (primeResult) {
  const primeResultDisplay = document.querySelector('#result');
  primeResultDisplay.textContent = `It is ${primeResult} that this number is a prime number`;
};

module.exports = ResultView;
