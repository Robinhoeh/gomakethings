// Toggle between seeing the password and not seeing it

// 1. A way to listen for when the checkbox is checked or unchecked.
const app = {};

app.document.addEventListener('checked', (e) => {
  e.preventDefault();

}, false);


// 2. reference the password field and switch from password to text and vice versa

