var title = document.getElementById("input");
var textarea = document.getElementById("textarea");

function addBtn() {
  document.getElementById("main2").style.display = "block";
  document.getElementById("main").style.display = "none";
}

function cancelBtn() {
  document.getElementById("main2").style.display = "none";
  document.getElementById("main").style.display = "block";
}

let savedNotes = [];
function saveBtn() {
  savedNotes.push({ title: input.value, description: textarea.value });
  localStorage.setItem("SavedNotes", JSON.stringify(savedNotes));

  if (textarea.value == "" || title.value == "") {
    document.getElementById("row").innerHTML += `<div class="column">
      <h2>Title</h2>
      <p>Some text..</p>
    </div>`;
  } else {
    document.getElementById("row").innerHTML += `<div class="column">
      <h2>${title.value}</h2>
      <p>${textarea.value}</p>
    </div>`;
  }
  document.getElementById("main2").style.display = "none";
  document.getElementById("main").style.display = "block";
  title.value = "";
  textarea.value = "";
}

setInterval(() => {
  document.getElementById("app").style.display = "none";
  document.getElementById("all_main").style.display = "block";
}, 3000);

(() => {
  savedNotes = JSON.parse(localStorage.getItem("SavedNotes")) || [];
  console.log(savedNotes);
  savedNotes.map(
    (x, y) =>
      (document.getElementById("row").innerHTML += `<div class="column">
      <h2>${x.title}</h2>
      <p>${x.description}</p>
    </div>`)
  );
})();
