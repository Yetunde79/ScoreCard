var player1 = document.querySelector("#p1");
var player2 = document.querySelector("#p2");

var score1 = document.getElementById("score1");
var score2 = document.getElementById("score2");

var tries = document.getElementById("tries");
var reset = document.getElementById("reset");
var input = document.querySelector("input");

var p1score = 0;
var p2score = 0;
var gameOver = false;
var winningScore = 0;

player1.addEventListener("click", function(){
    if(!gameOver){
        p1score++;
        if(p1score === winningScore){
            gameOver = true;
            score1.classList.add("winner");
        }
        score1.textContent = p1score;
    }
});

player2.addEventListener("click", function(){
    if(!gameOver){
        p2score++;
        if(p2score === winningScore){
            gameOver = true;
            score2.classList.add("winner");
        }
        score2.textContent = p2score;
    }
});

reset.addEventListener("click", resetting);

function resetting(){
    p1score = 0;
    p2score = 0;
    score1.textContent = p1score;
    score2.textContent = p2score;
    score1.classList.remove("winner");
    score2.classList.remove("winner");
    gameOver = false;
}

input.addEventListener("change", function(){
    tries.textContent = this.value;
    winningScore = Number(this.value);
    resetting();
});