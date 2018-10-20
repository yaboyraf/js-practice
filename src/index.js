var bg = document.querySelector("button");
//toggle using js and html
//var a = document.querySelector("body");
//var isPurp = false;

// bg.addEventListener("click", function () {
//   if(isPurp){
//     a.style.background = "white";
//   } else{
//     a.style.background = "purple";
//   }
// });

//toggle using css
bg.addEventListener("click", function() {
  document.body.classList.toggle("pink");
});

var h1 = document.querySelector("h1");
var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var input = document.querySelector("input");
var goal = document.querySelector("p span");
var resetScore = false;
let p1Score = 0;
var p1Disp = document.querySelector("#p1disp");
let p2Score = 0;
var p2Disp = document.querySelector("#p2disp");
var gameOver = false;
let finalScore = 7;

input.addEventListener("change", function() {
  //console.log("we are parsing: ", input.value);
  const intInput = parseInt(input.value);
  if (input.value === "") {
    goal.textContent = "Enter a number not an empty string,";
  } else {
    goal.textContent = intInput;
  }
  finalScore = intInput;
  reset();
});

p1Button.addEventListener("click", function() {
  //console.log("p1Score: ", p1Score);
  //console.log("finalScore is: ", finalScore);
  if (!gameOver) {
    p1Score++;
    if (p1Score === finalScore) {
      p1Disp.classList.add("winner");
      gameOver = true;
    }
    p1Disp.textContent = p1Score;
    //console.log(p1Sco re);
  }
});

p2Button.addEventListener("click", function() {
  if (!gameOver) {
    p2Score++;
    if (p2Score === finalScore) {
      p2Disp.classList.add("winner");
      gameOver = true;
    }
    p2Disp.textContent = p2Score;
    //console.log(p2Score);
  }
});

resetButton.addEventListener("click", function() {
  reset();
});

function reset() {
  p1Score = 0;
  p1Disp.textContent = 0;
  p1Disp.classList.remove("winner");
  p2Score = 0;
  p2Disp.textContent = 0;
  p2Disp.classList.remove("winner");
  gameOver = false;
}
