// form onsubmit function
let form = document.getElementById('user_form');
// console.log('document->', document);
function validSubmit(e) {
  // console.log('validSubmit', e);
  e.preventDefault();
  var userName = document.getElementById('user_name').value;
  // console.log('userName->', typeof userName);

  var fName = document.querySelector('#f_name').value;
  // console.log('fName->', fName);

  var genderValue = document.user_form.gender;
  console.log('genderValue->', genderValue);

  if (userName == '') {
    document.getElementById('user_err').innerHTML = 'Please add user name';
    setTimeout(() => {
      document.getElementById('user_err').innerHTML = '';
    }, 1000);
    return false;
  } else {
    document.getElementById('user_err').innerHTML = '';
  }

  if (fName == '') {
    document.getElementById('fname_err').innerHTML = 'Please add first name';
    setTimeout(() => {
      document.getElementById('fname_err').innerHTML = '';
    }, 1000);
    return false;
  } else {
    document.getElementById('fname_err').innerHTML = '';
  }

  if (genderValue.value == '') {
    document.getElementById('gender_err').innerHTML = 'Please select gender';
    setTimeout(() => {
      document.getElementById('gender_err').innerHTML = '';
    }, 1000);
    return false;
  } else {
    document.getElementById('gender_err').innerHTML = '';
  }
}
// addEventListener(type, listener, useCapture)
form.addEventListener('submit', validSubmit);
