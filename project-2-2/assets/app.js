// Display the top stories from the NYTimes
// Pick 3 - 5 sections and display 3 - 5 top stories


// Set variables
const newsApp = {};
newsApp.app = document.querySelector('#app');
newsApp.apiKey = '68331c5281b443f89dd1f073aab9aa54';
newsApp.sections = ['technology','science', 'magazine'];
newsApp.articleCount = 3;

//Sanatize HTML
newsApp.sanitizeHTML = function (str) {
  newsApp.temp = document.createElement('div');
  newsApp.temp.textContent = str;
  return newsApp.temp.innerHTML;
};

newsApp.renderArticles = function(articles) {
  newsApp.content = '';
  articles.forEach( article => {
    newsApp.content +=
    `<li>
      <strong><a href=`${newsApp.sanatizeHTML(article.url)}${newsApp.sanatizeHTML(article.title)}`</a></strong><br>
      <span class="text-muted text-small">${newsApp.sanatizeHTML(article.byline)}</span><br>
      <span class="text-small>${newsApp.sanatizeHTML(article.abstract)}</span>
      </li>`
  });
};



//Render section helper function
newsApp.renderSection = function(articles, title) {
  articles = JSON.parse(articles.responseText).results.slice(0, newsApp.articleCount);
  newsApp.section = document.createElement('div');
  newsApp.section.id = `section-${title}`;
  newsApp.section.innerHTML = `
    <h2 class="title-case">${title}</h2>
    <ol>${newsApp.renderedArticles(articles)}</ol>
  `;
  newsApp.app.append(newsApp.section);
}



newsApp.makeRequest = function(section) {

  newsApp.url = `https://api.nytimes.com/svc/topstories/v2${newsApp.section}.json?api-key=${newsApp.apiKey}`;
  // Setup HTTP request
  newsApp.xhr = new XMLHttpRequest();

  newsApp.xhr.onload = function() {
    if(newsApp.xhr.readyState !== 4) return;

    if(newsApp.xhr.status >= 200 && newsApp.xhr.status < 300) {
      renderSection(newsApp.xhr, newsApp.section)
    }
  }
  newsApp.xhr.open('GET', newsApp.url, true);
  newsApp.xhr.send();
};

// Call NYTimes API

newsApp.getArticles = function() {
  newsApp.sections.forEach(function () {
    //make request
    newsApp.makeRequest(newsApp.section);
  });
};

newsApp.getArticles();



