const textArray = ["A coder, a dreamer, a star in progress."];

let index = 0;
let charIndex = 0;
let currText = "";
let typingElement = document.querySelector(".typing");

function type() {
  if (charIndex < textArray[index].lenght) {
    currText += textArray[index].charAt(charIndex);
    typingElement.textContent = currText;
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(() => {}, 2000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (textArray.length) setTimeout(type, 500);
});
