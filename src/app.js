//the app ensures that all the relevant seperate parts of the program are listening to each other by calling the .bindEvents method on them. 


const PrimeChecker = require('./models/prime_checker.js');
const FormView = require('./views/form_view.js');
const ResultView = require('./views/result_view.js');

document.addEventListener('DOMContentLoaded', () => {

  console.log("JavaScript has loaded");

  const formView = new FormView();
  formView.bindEvents();

  const primeChecker = new PrimeChecker();
  primeChecker.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();
});
