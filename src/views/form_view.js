PubSub = require('../helpers/pub_sub');

//FormView deals with the form on the html page into which the user enters their number. The form is isolated and saved as a variable 'form' by using document.querySelector() method.   An event listener is added which listens for the form being submitted.
//When the form is submitted the number is captured and put into the variable 'inputtedNumber' by using event(the form).target(targets).number(the input field is called number - either by id or name).value(the value of this field).
//this number is then sent out using the PubSub. publish method with the channel-name FormView:NumberSubmitted as the channel and the inputted number as the payload.


FormView = function () {

};

FormView.prototype.bindEvents = function () {
  const form = document.querySelector('#prime-checker-form')
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputtedNumber = event.target.number.value;
    console.log(inputtedNumber);
    PubSub.publish('FormView:NumberSubmitted', inputtedNumber);
  })
};


module.exports = FormView;
