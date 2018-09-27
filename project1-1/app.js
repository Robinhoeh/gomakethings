const app = {};

//Reference all password fields
app.loginPasswordInput = document.querySelector('#password');
app.currentPasswordInput = document.querySelector('#current-pw');
app.newPasswordInput = document.querySelector('#new-pw');
app.document = document;


app.document.addEventListener('click', function(e) {
  if (e.target.id === 'show-password' && e.target.type === 'checkbox') {
    if(app.loginPasswordInput.getAttribute('type') === 'password') {
      app.loginPasswordInput.setAttribute('type', 'text');
    } else {
      app.loginPasswordInput.setAttribute('type', 'password');
    }
  }

  if (e.target.id === 'show-passwords' && e.target.type === 'checkbox') {
    if(app.currentPasswordInput.getAttribute('type') === 'password' &&
    app.newPasswordInput.getAttribute('type') === 'password') {
      app.currentPasswordInput.setAttribute('type', 'text')
      app.newPasswordInput.setAttribute('type', 'text');
    } else {
      app.currentPasswordInput.setAttribute('type', 'password')
      app.newPasswordInput.setAttribute('type', 'password');
    }
  }
});


  



  







 
  




















