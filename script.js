function getFormvalue() {

  const firstName = document.querySelector('input[name="fname"]').value.trim();
  const lastName = document.querySelector('input[name="lname"]').value.trim();

  alert(firstName + " " + lastName);

  return false; // stop form submission
}
