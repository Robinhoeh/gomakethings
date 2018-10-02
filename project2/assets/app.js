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
makeRequest('https://jsonplaceholder.typicode.com/posts', 'GET', function (posts) {
    posts.forEach(function (post) {
        console.log(post);
        //Disaply data to the DOM
        const listUl = document.querySelector('.list-header');
        const postItem = document.createElement('li');
        postItem.textContent = `${post.id} - ${post.title}`;
        listUl.appendChild(postItem);
    });
});



