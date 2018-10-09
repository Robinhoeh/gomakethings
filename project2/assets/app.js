// Reference to buttons
const app = {}
app.quoteBox = document.querySelector('.js-quote-box');
app.apiCallButton = document.querySelector('.js-api-call-button');
app.firstHeader = document.querySelector('.first-header');
app.appElement = document.querySelector('.app');


// focus of button on page load
app.apiCallButton.focus();


app.makeRequest = function (url, method, success, failure) {
  // Make sure a URL and method were provided
  if (!url || !method) return;
  // Set up our HTTP request
  const xhr = new XMLHttpRequest();
  // Setup our listener to process request state changes
  xhr.onreadystatechange = function () {
     // Only run if the request is complete
    if (xhr.readyState !== 4) return;
      const errorHeader = document.createElement('h3');
      errorHeader.classList.add('error-header');
      errorHeader.textContent = `😭${xhr.statusText}😭`;
      app.appElement.appendChild(errorHeader);

    // Process our return data
    if (xhr.status >= 200 && xhr.status < 300) {
      errorHeader.style.display = 'none';
      // Run the success callback
      if (success && typeof success === 'function') {
          success(JSON.parse(xhr.responseText), xhr);
      }
    } else {
      // Run the failure callback
      if (failure && typeof failure === 'function') {
          failure(xhr)
      }
    }
  };

  // Create and send a request
  // Defaults to GET
  xhr.open(method, url);
  xhr.send();
};

// Get a list of posts
function makeApiCall () {
  app.makeRequest('http://ron-swanson-quotes.herokuapp.com/v2/quotes','GET', function (posts) {
    posts.forEach(function (post) {
      //Disaply data to the DOM
      app.quoteBox.textContent = post;
      //stop quote from repeating itself

    });
  });
}

makeApiCall();
app.apiCallButton.addEventListener('click', makeApiCall, false);


