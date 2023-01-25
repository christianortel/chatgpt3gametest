const character = document.getElementById("character");
const dumbledore = document.getElementById("dd")
const chatbox = document.querySelector("#chatbox");
let dumbledoreChatbox = document.getElementById("dumbledore-chatbox");

const maxX = 720;
const maxY = 720;

let x = window.innerWidth / 2;
let y = window.innerHeight / 2;

//for mobile
let targetX = 0;
let targetY = 0;

var music = document.getElementById("music");
// music.onloadeddata = function() {
//     music.play({
//     userGesture: true
// });
// };


//dumbledore chatbox location
dumbledoreChatbox.style.left = dumbledore.offsetLeft + "px";
dumbledoreChatbox.style.top = dumbledore.offsetTop + "px";

//dumbledore chatbox
// setInterval(function() {
//     if (dumbledoreChatbox.style.display === "none") {
//         dumbledoreChatbox.style.display = "block";
//     } else {
//         dumbledoreChatbox.style.display = "none";
//     }
// }, 2000);

//dumbledore chatbox v2
let dumbledoreMessages = [
  "walk around!",
  "click ENTER to meet the creator!",
  "SPACE BAR to check out his portfolio!",
  "pls go now. you stink.",
];

//create a counter variable to keep track of the current message index
let messageIndex = 0;

setInterval(function() {
  if (dumbledoreChatbox.style.display === "none") {
    dumbledoreChatbox.style.display = "block";
    //change the content of the chatbox element
    dumbledoreChatbox.innerHTML = dumbledoreMessages[messageIndex];
    //increment the message index
    messageIndex++;
    //if the message index is equal to the number of messages, reset it to 0
    if (messageIndex === dumbledoreMessages.length) {
      messageIndex = 0;
    }
  } else {
    dumbledoreChatbox.style.display = "none";
  }
}, 1500);

// function for moving the character
document.addEventListener("keydown", function(event) {
  music.play();
  switch (event.keyCode) {
    case 37:
      x -= 10;
      break;
    case 38:
      y -= 10;
      break;
    case 39:
      x += 10;
      break;
    case 40:
      y += 10;
      break;
  }
  character.style.left = x + "px";
  character.style.top = y + "px";
});

//chatbox tracking for main character
document.addEventListener("keydown", function(e) {
  if (e.keyCode === 13) {
    chatbox.style.visibility = (chatbox.style.visibility === "visible") ? "hidden" : "visible";
    chatbox.style.left = character.offsetLeft + "px";
    chatbox.style.top = character.offsetTop + "px";
  }
});

// mobile movement
document.addEventListener("touchstart", function(event) {
  targetX = event.touches[0].clientX;
  targetY = event.touches[0].clientY;
  character.style.transition = "all 0.5s ease-in-out"
  character.style.left = targetX + "px";
  character.style.top = targetY + "px";
});

document.addEventListener("keydown", function(event) {
  if (event.keyCode === 32) {
    window.open("https://christianortel.xyz", "_blank");
  }
});

