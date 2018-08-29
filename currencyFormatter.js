// using ES6 Intl.NumberFormat to format currency
let money = 100000;

let currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2 // minimum number of digits after the decimal separator (ex: 2.00)
});

console.log(currencyFormatter.format(money)); // $100,000.00
