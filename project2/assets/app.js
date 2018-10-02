/*Some considerations
What should users see when the page first loads but the API hasn’t returned a quote yet?
What should the app do if the API fails to return a quote?

How should clicking the More Ron button work, and what can you do to avoid writing the same quote twice?
*/


// Reference to buttons
const app = {}
app.quoteBox = document.querySelector('.quoteBox');
app.apiCallButton = document.querySelector('.apiCallButton');
app.secondHeader = document.querySelector('.second-header');
app.errorHeader = document.querySelector('.error-header');
app.document = document.querySelector('document');

// when somoneclick on the button
// make a call to the API
// display the quote on the page
// if request fails, display fail message
// stop if from return same quote twice



const makeRequest = function (url, method, success, failure, always) {

  // Make sure a URL and method were provided
  if (!url || !method) return;

  // Set up our HTTP request
  const xhr = new XMLHttpRequest();

  // Setup our listener to process request state changes
  xhr.onreadystatechange = function () {
    // Process our return data
    if (xhr.status >= 200 && xhr.status < 300) {
      // Run the success callback
      if (success && typeof success === 'function') {
          success(JSON.parse(xhr.responseText), xhr);
      }
    } else {
      // Run the failure callback
      if (failure && typeof failure === 'function') {
          failure(xhr);
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
makeRequest('http://ron-swanson-quotes.herokuapp.com/v2/quotes', 'GET', function (posts) {
    posts.forEach(function (post) {
        console.log(post);
        //Disaply data to the DOM
        const listUl = document.querySelector('.list-header');
        const postItem = document.createElement('li');
        postItem.textContent = `${post.id} - ${post.title}`;
        listUl.appendChild(postItem);
    });
});



