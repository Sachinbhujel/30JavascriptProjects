function clickBtn() {
  let grocery = document.getElementById("grocery");
  if (grocery.value == "") {
    document.getElementById("error").innerHTML = "Invalid Text";
  } else {
    document.getElementById("show_item").innerHTML += `<div id="items_div">
        <p class="item">${grocery.value}</p>
        <div class="item_info">
          <span class="material-symbols-outlined edit" onclick="editItem(this)">
            edit
          </span>
          <span class="material-symbols-outlined delete" onclick="deleteItem(this)">
            delete
          </span>
        </div>
      </div>`;
    grocery.value = "";
  }
}

function deleteItem(e) {
  e.parentElement.parentElement.remove();
}

function editItem(e) {
  let itemText = e.parentElement.parentElement.children[0].innerText;
  let grocery = document.getElementById("grocery");
  grocery.value = itemText;
  grocery.focus();
  e.parentElement.parentElement.remove();
}

