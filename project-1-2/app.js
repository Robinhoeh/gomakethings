// Namespace
const app = {}
// Reference elements
app.farenheitInput = document.querySelector('#js-farenheit');
app.celciusInput = document.querySelector('#js-celcius');
app.document = document.documentElement;

// Listen for input changes
app.document.addEventListener('input', function (e) {
  //if target matches id of farenheit or is a number
  if(e.target.id === 'js-farenheit' && e.target.type === 'number') {
    app.celciusInput.value = farenheitToCelcius(e.target.value)
  } if (e.target.id === 'js-celcius' && e.target.type === 'number');
      app.celciusInput.value = farenheitToCelcius(e.target.value);
}, false);


function farenheitToCelcius (temp) {
 return Math.round((temp - 32) * 5 / 9);
}

function celciusToFarenheit(temp) {
  return Math.round((temp * 9 / 5) + 32);
}


