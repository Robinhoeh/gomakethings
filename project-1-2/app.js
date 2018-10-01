// Namespace
const app = {}
// Reference elements
app.farenheitInput = document.querySelector('#js-farenheit');
app.celciusInput = document.querySelector('#js-celcius');
app.document = document.documentElement;

// Listen for input changes
app.document.addEventListener('input', function (e) {
  // if value of user input < 1, quit
  if (e.target.value.length < 1) return;
  //if target matches id of farenheit and is a number
  if(e.target.id === 'js-farenheit' && e.target.type === 'number') {
    // the value of F converted to Celcius, display dynamic value in both inputs
    app.celciusInput.value = farenheitToCelcius(e.target.value)
  } else {
    // if input is C and a number
    e.target.id === 'js-celcius' && e.target.type === 'number';
    // the value of C is converted and displayed dynamically in both values
    app.farenheitInput.value = celciusToFarenheit(e.target.value);
  }
}, false);


function farenheitToCelcius (temp) {
 return Math.round((temp - 32) * 5 / 9);
}

function celciusToFarenheit(temp) {
  return Math.round((temp * 9 / 5) + 32);
}




