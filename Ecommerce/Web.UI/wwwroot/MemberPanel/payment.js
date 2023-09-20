
// Function to handle card number input
document.querySelectorAll('.input-cart-number').forEach(function(inputElement, index, array) {
    inputElement.addEventListener('keyup', function(event) {
        var target = event.target;
  
        if (target.value.length > 3 && index < array.length - 1) {
            array[index + 1].focus();
        }
  
        var card_number = '';
        array.forEach(function(input) {
            card_number += input.value + ' ';
            if (input.value.length === 4) {
                input.nextElementSibling.focus();
            }
        });
  
        document.querySelector('.credit-card-box .number').textContent = card_number;
    });
  });
  
  // Function to handle card holder input
  document.getElementById('card-holder').addEventListener('keyup', function(event) {
    var cardHolder = event.target.value;
    document.querySelector('.credit-card-box .card-holder div').textContent = cardHolder;
  });
  
  // Function to handle card expiration date input
  document.getElementById('card-expiration-month').addEventListener('change', function() {
    var month = document.getElementById('card-expiration-month').value;
    var year = document.getElementById('card-expiration-year').value.substr(2, 2);
    document.querySelector('.card-expiration-date div').textContent = month + '/' + year;
  });
  
  document.getElementById('card-expiration-year').addEventListener('change', function() {
    var month = document.getElementById('card-expiration-month').value;
    var year = document.getElementById('card-expiration-year').value.substr(2, 2);
    document.querySelector('.card-expiration-date div').textContent = month + '/' + year;
  });
  
  // Function to handle CCV input
  var ccvInput = document.getElementById('card-ccv');
  ccvInput.addEventListener('focus', function() {
    document.querySelector('.credit-card-box').classList.add('hover');
  });
  
  ccvInput.addEventListener('blur', function() {
    document.querySelector('.credit-card-box').classList.remove('hover');
  });
  
  ccvInput.addEventListener('keyup', function(event) {
    var ccv = event.target.value;
    document.querySelector('.ccv div').textContent = ccv;
  });
  
  // Simulate focus and blur for CCV input
  setTimeout(function() {
    ccvInput.focus();
    setTimeout(function() {
        ccvInput.blur();
    }, 1000);
  }, 500);
  