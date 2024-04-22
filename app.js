let textbox = document.querySelector(".guess");

let checkBtn = document.querySelector(".check");

let message = document.querySelector(".message");

let bodyEle = document.querySelector("body");

let question = document.querySelector(".question")

let highScoreEle = document.querySelector(".highScore")

let scoreEle = document.querySelector(".score")

let againBtn = document.querySelector(".again")

let screctNumber = Math.trunc(Math.random() * 20) + 1;
console.log(screctNumber);
let score = 20;
let highScore = 0;
checkBtn.addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    message.textContent = "no guess😕";
  } 
  else if (guess === screctNumber) {
    message.textContent = "Correct Guess✅";
    bodyEle.style.backgroundColor = 'green';
    question.textContent = screctNumber;

    if(score>highScore){
      highScoreEle.textContent = score;
    }
  } 
  else if (guess > screctNumber) {
    if(score>1){
      message.textContent = "Too High📈";
      score--;
      scoreEle.textContent = score;
    }
    else{
      message.textContent = ' Game Over☹️';
      scoreEle.textContent = 0;
      body.style.backgroundColor = 'blue'
    }
  } 
  else {
    if(score>1){
      message.textContent = "Too Low📉";
      score--;
      scoreEle.textContent = score;
    }
    else{
      message.textContent = 'Game Over☹️';
      scoreEle.textContent = 0;
      body.style.backgroundColor = 'blue'
    }
  }
})
againBtn.addEventListener('click',function(){
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.question').textContent = '?';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.highScore').textContent = 0;
  document.querySelector('.Game').style.backgroundColor = '#40A2E3'
})



