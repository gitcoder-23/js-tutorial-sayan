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
  //console.log('genderValue->', genderValue);

  var emailValue = document.querySelector('#email').value;;
   //console.log('emailValue->', emailValue);

   var phnValue = document.getElementById('phone').value;
   //console.log('phnValue->', phnValue);

   var passValue = document.getElementById('password').value;
   //console.log('passValue->', passValue);

   var cnfpassValue = document.getElementById('confirm_password').value;
   //console.log('cnfpassValue->', cnfpassValue);

   var courseDropdown = document.getElementById('course').value;
   //console.log('courseDropdown->', courseDropdown);

   var fileInput = document.getElementById("profile_picture");
      //console.log('fileInput->', fileInput);




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

  if (emailValue == '') {
    document.getElementById('email_err').innerHTML = 'Please select Email';
    setTimeout(() => {
      document.getElementById('email_err').innerHTML = '';
    }, 1000);
    return false;
  } else {
    document.getElementById('email_err').innerHTML = '';
  }

  if (phnValue == '') {
    document.getElementById('phone_err').innerHTML = 'Please add Phone Number';
    setTimeout(() => {
      document.getElementById('phone_err').innerHTML = '';
    }, 1000);
    return false;
  } else {
    document.getElementById('phone_err').innerHTML = '';
  }

  if (passValue == '') {
    document.getElementById('pass_err').innerHTML = 'Please add Password';
    setTimeout(() => {
      document.getElementById('pass_err').innerHTML = '';
    }, 1000);
    return false;
  } else {
    document.getElementById('pass_err').innerHTML = '';
  }

  if (cnfpassValue == '') {
    document.getElementById('cnfpass_err').innerHTML = 'Please Retype Your Password';
    setTimeout(() => {
      document.getElementById('cnfpass_err').innerHTML = '';
    }, 1000);
    return false;
  } else {
    document.getElementById('cnfpass_err').innerHTML = '';
  }

  if (courseDropdown == '') {
    document.getElementById('course_err').innerHTML = 'Please Select Course';
    setTimeout(() => {
      document.getElementById('course_err').innerHTML = '';
    }, 1000);
    return false;
  } else {
    document.getElementById('course_err').innerHTML = '';
  }

  if (fileInput.files.length == 0) {
    document.getElementById('profilepic_err').innerHTML = 'Please Select Profile Pic';
    setTimeout(() => {
      document.getElementById('profilepic_err').innerHTML = '';
    }, 1000);
    return false;
  } else {
    document.getElementById('profilepic_err').innerHTML = '';
  }
}
// addEventListener(type, listener, useCapture)
form.addEventListener('submit', validSubmit);
