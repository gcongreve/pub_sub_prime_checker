const PubSub = require('../helpers/pub_sub.js');

//the PrimeChecker will check if the inputtedNumber is a prime number or not. It recieves the inputted number by subscribing to the FormView:NumberSubmitted channel, when a number is submitted it gets the number from the PubSub by using .detail.
//It then runs the numberIsPrime method on the number to see if it is true or false.
//the result of this functiion is stored in the 'result' variable and then sent out on the PrimeChecker:PrimeResult channel by using PubSub.publish. 

PrimeChecker = function () {

}

PrimeChecker.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:NumberSubmitted', (event) => {
    const inputtedNumber = event.detail;
    const result = this.numberIsPrime(inputtedNumber);
    PubSub.publish('PrimeChecker:PrimeResult', result);
  });
};


PrimeChecker.prototype.numberIsPrime = function (number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

module.exports = PrimeChecker;
