// form onsubmit function
let form = document.getElementById('user_form');
function validSubmit(e) {
  console.log('validSubmit', e);

  e.preventDefault();
}
form.addEventListener('submit', validSubmit);
