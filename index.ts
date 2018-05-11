function check(form) {
  if (form.userid.value == "aub" && form.pswrd.value == "123") {
    window.open('aub.html');
  } else {
    alert("Username and password don't match.");
  }
}
