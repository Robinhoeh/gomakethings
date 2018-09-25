document.addEventListener('submit', (e) => {
  if (e.target.className === 'form') {
    e.preventDefault();
    const name = e.target.querySelector('#name');
    alert(`Hello, ${name.value.toUpperCase()}`);
    name.value = '';
  }
}, false);