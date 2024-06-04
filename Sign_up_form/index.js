let progress_bar = document.querySelector(".progress_bar");
let progress_step = document.querySelectorAll(".progress_step");
let name_div = document.getElementById("name_div");
let details_div = document.getElementById("details_div");
let id_div = document.getElementById("id_div");
let key_div = document.getElementById("key_div");

function nameNextBtn() {
  progress_bar.classList.add("name");
  name_div.style.display = "none";
  details_div.style.display = "flex";
  document
    .querySelector(".progress_step[data-title='Details']")
    .classList.add("active");
}

function detailNextBtn() {
  progress_bar.classList.add("detail");
  id_div.style.display = "flex";
  details_div.style.display = "none";
  document
    .querySelector(".progress_step[data-title='ID']")
    .classList.add("active");
}

function idNextBtn() {
  progress_bar.classList.add("id");
  id_div.style.display = "none";
  key_div.style.display = "flex";
  document
    .querySelector(".progress_step[data-title='Key']")
    .classList.add("active");
}

function detailPrevBtn() {
  progress_bar.classList.remove("namePrev");
  name_div.style.display = "flex";
  details_div.style.display = "none";
  document
    .querySelector(".progress_step[data-title='Details']")
    .classList.remove("active");
}

function idPrevBtn() {
  progress_bar.classList.remove("detailPrev");
  id_div.style.display = "none";
  details_div.style.display = "flex";
  document
    .querySelector(".progress_step[data-title='ID']")
    .classList.remove("active");
}

function keyPrevBtn() {
  progress_bar.classList.remove("keyPrev");
  id_div.style.display = "flex";
  key_div.style.display = "none";
  document
    .querySelector(".progress_step[data-title='Key']")
    .classList.remove("active");
}
