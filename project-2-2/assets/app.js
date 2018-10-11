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
  articles.forEach( function(article) {
    newsApp.content +=
    `<li><strong>
      <a href="${newsApp.sanatizeHTML(article.url)}${newsApp.sanatizeHTML(article.title)}">
      </a></strong><br>
      <span class="text-muted text-small">${newsApp.sanatizeHTML(article.byline)}</span><br>
      <span class="text-small">${newsApp.sanatizeHTML(article.abstract)}</span>
      </li>`
  });
};


//Render section helper function
newsApp.renderSection = function(articles, title) {
  articles = JSON.parse(articles.responseText).results.slice(0, newsApp.articleCount);
  const section = document.createElement('div');
  section.id = `section-${title}`;
  section.innerHTML = `
    <h2 class="title-case">${title}</h2>
    <ol>${newsApp.renderedArticles(articles)}</ol>
  `;
  newsApp.app.append(section);
}


newsApp.makeRequest = function(section) {

  const url = `https://api.nytimes.com/svc/topstories/v2${section}.json?api-key=${newsApp.apiKey}`;
  // Setup HTTP request
  const xhr = new XMLHttpRequest();

  xhr.onload = function() {

    console.log(JSON.parse(xhr.responseText));

    if(xhr.status >= 200 && xhr.status < 300) {
      newsApp.renderSection(xhr, section)
    }
  }
  xhr.open('GET', url, true);
  xhr.send();
};


// Call NYTimes API
newsApp.getArticles = function() {
  newsApp.sections.forEach(function (section, index) {
    //make request
    newsApp.makeRequest(section);
  });
};

newsApp.getArticles();



