// Reference to buttons
const app = {}
app.quoteBox = document.querySelector('.js-quote-box');
app.apiCallButton = document.querySelector('.js-api-call-button');
app.firstHeader = document.querySelector('.first-header');
app.appElement = document.querySelector('.app');


// focus of button on page load
app.apiCallButton.focus();

app.makeRequest = function () {

  //Prevent making 2nd api call during 1st call
  app.apiCallButton.disabled = true;

  // Set up our HTTP request
  const xhr = new XMLHttpRequest();

  // Setup our listener to process request state changes
  xhr.onreadystatechange = function () {
     // Only run if the request is complete
    if (xhr.readyState !== 4) return;

    // Process our return data
    if (xhr.status >= 200 && xhr.status < 300) {
      app.quoteBox.textContent = JSON.parse(xhr.responseText);
      // Run the success callback
    } else {
      // Run the failure callback
      app.quoteBox.textContent = 'Oops something went wrong. Please try again in a few secs!'
      const errorHeader = document.createElement('h3');
      errorHeader.classList.add('error-header');
      errorHeader.textContent = `😭${xhr.statusText}😭`;
      app.appElement.appendChild(errorHeader);
    }
    // Allow user to click button again regardless of succes or failure
    app.apiCallButton.disabled = false;
  };

  // Create and send a request
  // Defaults to GET
  xhr.open('GET', 'https://ron-swanson-quotes.herokuapp.com/v2/quotes');
  xhr.send();
};

app.makeRequest();
app.apiCallButton.addEventListener('click', app.makeRequest, false);


