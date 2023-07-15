const inputElement = document.querySelector(".js--input");
const currencyElement = document.querySelector(".js--currency");
const resultElement = document.querySelector(".js--result");
const buttonElement = document.querySelector(".js--form");

let currencyUSD = 4.09;
let currencyEUR = 4.46;
let currencyGBP = 5.20;
let currencyCHF = 4.57;

buttonElement.addEventListener("submit", (e) => {
    e.preventDefault();

    let amount = +inputElement.value;
    let currency = currencyElement.value;
    let result;

    switch (currency) {
        case "USD":
            result = amount / currencyUSD;
            break;
        case "EUR":
            result = amount / currencyEUR;
            break;
        case "GBP":
            result = amount / currencyGBP;
            break;
        case "CHF":
            result = amount / currencyCHF;
            break;
    }

    resultElement.innerText = ` ${result.toFixed(2)} ${currency}`
});