function numbers(el) {
  let result = document.getElementById("result");
  result.value += el;
}

function clear_numbers() {
  result.value = "";
}

function backspace() {
  let result = document.getElementById("result");
  result.value = result.value.slice(0, -1);
}

function equal() {
  let result = document.getElementById("result");
  try {
    result.value = eval(result.value);
  } catch (e) {
    result.value = "Error";
  }
}
