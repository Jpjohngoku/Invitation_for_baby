let yesBtnWidth = 150;
let yesBtnHeight = 50;
let yesBtnFontSize = 16;
let noBtnWidth = 120;
let noBtnHeight = 40;
let currentIndex = 0;

const noButtonTexts = [
  "Are you sure?",
  "Come on, think again",
  "I know you wanna come",
  "It'll be fun",
  "not convinced?",
  "did i tell you ?",
  "I like you!",
  "No really, I LIKE YOU!",
  "Sooooo much!",
  "Still not convinced?",
  "Let me tell you something",
  "You're AMAZING",
  "You're the most amazing girl",
  "The best in the world",
  "So beautiful",
  "So kind",
  "so generous",
  "Extremely funny",
  "So cute",
  "So smart",
  "So so beautiful",
  "you have no idea",
  "you're  my favourite",
  "you're the best",
  "the most beautiful girl in the world",
  "the most amazing girl in the world",
  "no, the whole universe",
  "no actually, the whole multiverse",
  "you're my person",
  "you're my everything",
  "I am obsessed with you",
  "I am sooooo in love with you",
  "I want you",
  "Life without you is not worth it",
  "the world is beautiful because you're in it",
  "you are my dream",
  "you are the only one i want in my life",
  "you're my best friend",
  "come for the movie baby !",
  "Still not convinced?"
  // Add more texts here...
];

document.getElementById("yesBtn").addEventListener("click", function() {
  window.location.href = "yes.html";
});



document.getElementById("noBtn").addEventListener("click", function() {

  // Change the button text
  //const randomIndex = Math.floor(Math.random() * noButtonTexts.length);
  //document.getElementById("noBtn").innerText = noButtonTexts[randomIndex];

  document.getElementById("noBtn").innerText = noButtonTexts[currentIndex];
  currentIndex = (currentIndex + 1) % noButtonTexts.length; // Increment index cyclically
  
  yesBtnWidth += 20;
  yesBtnHeight += 10;
  yesBtnFontSize += 5;
  //noBtnWidth -= 10;
  //noBtnHeight -= 5;

  document.getElementById("yesBtn").style.width = yesBtnWidth + "px";
  document.getElementById("yesBtn").style.height = yesBtnHeight + "px";
  document.getElementById("yesBtn").style.fontSize = yesBtnFontSize + "px";
  //document.getElementById("noBtn").style.width = noBtnWidth + "px";
  //document.getElementById("noBtn").style.height = noBtnHeight + "px";
});
