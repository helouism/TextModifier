document.addEventListener("DOMContentLoaded", function () {
  window.upperCase = function () {
    let text = document.getElementById("input_text").value;
    document.getElementById("input_text").value = text.toUpperCase();
  };

  window.lowerCase = function () {
    let text = document.getElementById("input_text").value;
    document.getElementById("input_text").value = text.toLowerCase();
  };

  window.capitalCase = function () {
    let text = document.getElementById("input_text").value;
    let final_text = text
      .toLowerCase()
      .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
    document.getElementById("input_text").value = final_text;
  };

  let text = document.getElementById("input_text");
  text.addEventListener("input", () => {
    let counter = text.value.split(/\s+/).filter(function (word) {
      return word.length > 0;
    }).length;
    document.getElementById(
      "word_count"
    ).textContent = `Word count : ${counter}`;
  });

  text.addEventListener("input", () => {
    let counter = text.value.length;
    document.getElementById(
      "char_count"
    ).textContent = `Character count : ${counter}`;
  });
});
