function upperCase() {
  text = document.getElementById("input_text").value;
  document.getElementById("input_text").value = text.toUpperCase();
}

function lowerCase() {
  text = document.getElementById("input_text").value;
  document.getElementById("input_text").value = text.toLowerCase();
}

function capitalCase() {
  let text = document.getElementById("input_text").value;
  let final_text = text
    .toLowerCase()
    .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
  document.getElementById("input_text").value = final_text;
}

// Character counter

let text = document.getElementById("input_text");
text.addEventListener("input", () => {
  let counter = text.value.length;
  document.getElementById(
    "char_count"
  ).textContent = `Character count : ${counter}`;
});

// Word counter
text.addEventListener("input", () => {
  let counter = text.value.split(/\s+/).filter(function (word) {
    return word.length > 0;
  }).length;
  document.getElementById("word_count").textContent = `Word count : ${counter}`;
});
