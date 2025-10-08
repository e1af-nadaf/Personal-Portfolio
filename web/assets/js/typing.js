const textArray = ["Just a girl with big dreams and a text editor."];

const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetween = 1000; // Delay before erasing
let textIndex = 0;
let charIndex = 0;
const typewriter = document.querySelector(".typing");

function type() {
  if (charIndex < textArray[textIndex].length) {
    typewriter.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetween);
  }
}

function erase() {
  if (charIndex > 0) {
    typewriter.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    setTimeout(type, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, 1000); // Initial delay before typing
});
