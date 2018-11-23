// reference to DOM elements
const tabsUl = document.querySelector('.tabs');
const tabPane = document.querySelectorAll('.tab-pane');

tabsUl.addEventListener('click', (e) => {
  if(e.target.tagName == 'LI') {
    const targetPane = document.querySelector(e.target.dataset.target);
    tabPane.forEach((panel) => {
      if(panel === targetPane) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    })
  }
})