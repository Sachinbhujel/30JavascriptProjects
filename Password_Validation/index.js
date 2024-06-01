function openEye() {
  document.getElementById("close_eye").style.display = "block";
  document.getElementById("open_eye").style.display = "none";
  document.getElementById("passwordInput").type = "text";
}

function closeEye() {
  document.getElementById("close_eye").style.display = "none";
  document.getElementById("open_eye").style.display = "block";
  document.getElementById("passwordInput").type = "password";
}

function validatePassword() {
  const password = document.getElementById("passwordInput").value;

  if (/[a-z]/.test(password)) {
    document.getElementById("lowerCaseCheck").style.display = "flex";
    document.getElementById("lowerCaseRadio").style.display = "none";
  } else {
    document.getElementById("lowerCaseCheck").style.display = "none";
    document.getElementById("lowerCaseRadio").style.display = "block";
  }

  if (/[A-Z]/.test(password)) {
    document.getElementById("upperCaseCheck").style.display = "flex";
    document.getElementById("upperCaseRadio").style.display = "none";
  } else {
    document.getElementById("upperCaseCheck").style.display = "none";
    document.getElementById("upperCaseRadio").style.display = "block";
  }

  if (/[0-9]/.test(password)) {
    document.getElementById("numberCaseCheck").style.display = "flex";
    document.getElementById("numberCaseRadio").style.display = "none";
  } else {
    document.getElementById("numberCaseCheck").style.display = "none";
    document.getElementById("numberCaseRadio").style.display = "flex";
  }

  if (/[^a-zA-Z0-9]/.test(password)) {
    document.getElementById("specialCaseCheck").style.display = "flex";
    document.getElementById("specialCaseRadio").style.display = "none";
  } else {
    document.getElementById("specialCaseCheck").style.display = "none";
    document.getElementById("specialCaseRadio").style.display = "flex";
  }

  if (password.length >= 8) {
    document.getElementById("lengthCaseCheck").style.display = "flex";
    document.getElementById("lengthCaseRadio").style.display = "none";
  } else {
    document.getElementById("lengthCaseCheck").style.display = "none";
    document.getElementById("lengthCaseRadio").style.display = "flex";
  }
}
