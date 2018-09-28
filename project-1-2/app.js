// (temp - 32) * 5/9 Farenhiet to celcius
// (temp * 9/5) + 32 Celcius to Farenheit

/*
Detect when the value of one of the two inputs is changed.
Do some math and then update the other value.
*/

/*
  click on input an enter number
  when you click on first input, it will instantly update and covert the other number
*/

// Namespace
const app = {}
// Reference elements
app.farenheitInput = document.querySelector('#farenheit');
app.celciusInput = document.querySelector('#celcius');
app.document = document;

app.document.addEventListener('change', (e) => {
  if(e.target.id === 'farenheit' && e.target.type === 'number') {
    //take number inputed by user and convert it to celcius
    // then make that the value of the celcius input
    app.userFarenheitInput = Math.round((app.farenheitInput.value - 32) * 5 / 9);
    app.celciusInput.value = app.userFarenheitInput;
  } else {
    e.target.id === 'celcius' && e.target.type === 'number'
    //take number inputed by user and convert it to farenheit
    //then make that the value of farenheit
    app.celciusInput = Math.round((app.celciusInput.value * 9 / 5) + 32);
    app.farenheitInput.value = app.celciusInput;
  }
})

