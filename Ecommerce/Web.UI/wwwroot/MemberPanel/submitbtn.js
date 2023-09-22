// HTML'de submit düğmesini bulun
var submitButton = document.getElementById('submitbtn');

// İnputları izlemek için bir fonksiyon oluşturun
function validateCreditCardInputs() {
    var cardNumberInputs = document.querySelectorAll('.input-cart-number');
    var cardHolderInput = document.getElementById('card-holder');
    var expirationMonthInput = document.getElementById('card-expiration-month');
    var expirationYearInput = document.getElementById('card-expiration-year');
    var ccvInput = document.getElementById('card-ccv');

    // Tüm gerekli alanlar dolduruldu mu kontrol edin
    var allInputsFilled =
        Array.from(cardNumberInputs).every(function(input) {
            return input.value.length === 4;
        }) &&
        cardHolderInput.value.trim() !== '' &&
        expirationMonthInput.value !== 'MM' &&
        expirationYearInput.value !== 'YY' &&
        ccvInput.value.length === 3;

    // Eğer tüm alanlar doldurulmuşsa, submit butonunu etkinleştirin; aksi takdirde devre dışı bırakın
    if (allInputsFilled) {
        submitButton.removeAttribute('disabled');
    } else {
        submitButton.setAttribute('disabled', 'disabled');
    }
}

// Inputlardaki herhangi bir değişiklik veya olay için doğrulamayı çağırın
document.querySelectorAll('.input-cart-number').forEach(function(inputElement) {
    inputElement.addEventListener('keyup', validateCreditCardInputs);
});

document.getElementById('card-holder').addEventListener('keyup', validateCreditCardInputs);
document.getElementById('card-expiration-month').addEventListener('change', validateCreditCardInputs);
document.getElementById('card-expiration-year').addEventListener('change', validateCreditCardInputs);
document.getElementById('card-ccv').addEventListener('keyup', validateCreditCardInputs);

// Sayfa yüklendiğinde de doğrulamayı çalıştırın
validateCreditCardInputs();