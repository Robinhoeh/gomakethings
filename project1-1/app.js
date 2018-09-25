// Toggle between seeing the password and not seeing it

// 1. A way to listen for when the checkbox is checked or unchecked.
const app = {};

//Reference all password fields
app.loginPasswordInput = document.querySelector('#password');
app.currentPasswordInput = document.querySelector('#current-pw');
app.newPasswordInput = document.querySelector('#new-pw');
app.document = document;



// Listen for clicks on checkboxes and change input type of passwords
// app.form = document.querySelector('form');
// app.checkbox = document.querySelector('input[name="show-passwords"]');

//listen for a click on entire document
app.document.addEventListener('click', function (e) {
  //if checkbox is selected
  if (e.target.id === 'show-password') {
    // And, the input type is password
    if(app.loginPasswordInput.getAttribute('type') === 'password') {
      // switch the type to text so it can be read
      app.loginPasswordInput.setAttribute('type', 'text');
    } else {
      // else, when button is clicked again, set it back to password
      app.loginPasswordInput.setAttribute('type', 'password');
    }
  }
  // if the checkbox is selected
  if (e.target.id === 'show-passwords') {
    //and the input type is assigned to password for both
    if(app.currentPasswordInput.getAttribute('type') === 'password' && app.newPasswordInput.getAttribute('type') === 'password') {
      // set it to type so you can see it
      app.currentPasswordInput.setAttribute('type', 'text');
      app.newPasswordInput.setAttribute('type', 'text');
    } else {
      // else, change them both back on click again
      app.currentPasswordInput.setAttribute('type', 'password');
      app.newPasswordInput.setAttribute('type', 'password');
    }
  }
});





// 2. reference the password field and switch from password to text and vice versa


