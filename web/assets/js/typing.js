const textArray = [
  "Just a girl with big dreams and a text editor.",
  "Exploring ideas, one line of code at a time.",
  "Writing code, creating worlds, living stories.",
  "Just a girl with a keyboard and endless curiosity.",
  "Coder by day, dreamer by night.",
];

const typingSpeed = 50;
const erasingSpeed = 30;
const delayBetween = 500;
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
    textIndex++;
    if (textIndex >= textArray.length) textIndex = 0;
    setTimeout(type, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, 500);
});
