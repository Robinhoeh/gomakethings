// Namespace
const app = {}
// Reference elements
app.farenheitInput = document.querySelector('#farenheit');
app.celciusInput = document.querySelector('#celcius');
app.document = document;

// Listen for input changes
function inputHandler(e) {
  if(e.target.id === 'farenheit' && e.target.type === 'number') {
    app.userFarenheitInput = Math.round((app.farenheitInput.value - 32) * 5 / 9);
    app.celciusInput.value = app.userFarenheitInput;
  } else {
      e.target.id === 'celcius' && e.target.type === 'number'
      app.userCelciusInput = Math.round((app.celciusInput.value * 9 / 5) + 32);
      app.farenheitInput.value = app.userCelciusInput;
  }
}
app.document.addEventListener('input', inputHandler, false);


