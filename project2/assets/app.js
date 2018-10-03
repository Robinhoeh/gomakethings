/*Some considerations

What should the app do if the API fails to return a quote?

How should clicking the More Ron button work, and what can you do to avoid writing the same quote twice?
*/

// Reference to buttons
const app = {}
app.quoteBox = document.querySelector('.js-quote-box');
app.apiCallButton = document.querySelector('.js-api-call-button');
app.firstHeader = document.querySelector('.first-header');


// focus of button on page load
app.apiCallButton.focus();


const makeRequest = function (url, method, success, failure, always) {
  // Make sure a URL and method were provided
  if (!url || !method) return;
  // Set up our HTTP request
  const xhr = new XMLHttpRequest();
  // Setup our listener to process request state changes
  xhr.onreadystatechange = function () {
     // Only run if the request is complete
    if (xhr.readyState !== 4) return;
    const errorHeader = document.createElement('h3');
    errorHeader.textContent = xhr.statusText;
    const appElement = document.querySelector('.app');
    appElement.appendChild(errorHeader);
    console.log(xhr.statusText);
    // Process our return data
    if (xhr.status >= 200 && xhr.status < 300) {
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
    if (always && typeof always === 'function') {
      always(JSON.parse(xhr.responseText), xhr);
    }
  };

  // Create and send a request
  // Defaults to GET
  xhr.open(method, url);
  xhr.send();
};

// Get a list of posts
function makeApiCall () {
  makeRequest('http://ron-swanson-quotes.herokuapp.com/2/quotes','GET', function (posts) {
    posts.forEach(function (post) {
      //Disaply data to the DOM
      const postItem = document.createElement('li');
      postItem.textContent = `${post}`;
      app.quoteBox.appendChild(postItem);
      //stop quote from repeating itself

    });
  });
}

app.apiCallButton.addEventListener('click', makeApiCall);


