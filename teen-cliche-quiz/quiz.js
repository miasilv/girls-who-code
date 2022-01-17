var questionCount = 0;
var rebelScore = 0;
var jockScore = 0;
var nerdScore = 0;
var popularScore = 0;

var result = document.getElementById("result");
var subResult = document.getElementById("sub-result");
var startover = document.getElementById("startover");
var button = document.createElement("button")

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");


q1a1.addEventListener("click", rebel);
q1a2.addEventListener("click", popular);
q1a3.addEventListener("click", nerd);
q1a4.addEventListener("click", jock);

q2a1.addEventListener("click", popular);
q2a2.addEventListener("click", rebel);
q2a3.addEventListener("click", jock);
q2a4.addEventListener("click", nerd);

q3a1.addEventListener("click", popular);
q3a2.addEventListener("click", jock);
q3a3.addEventListener("click", rebel);
q3a4.addEventListener("click", nerd);

q4a1.addEventListener("click", rebel);
q4a2.addEventListener("click", nerd);
q4a3.addEventListener("click", popular);
q4a4.addEventListener("click", jock);

q5a1.addEventListener("click", popular);
q5a2.addEventListener("click", nerd);
q5a3.addEventListener("click", rebel);
q5a4.addEventListener("click", jock);

//disable
q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", disableQ1);
q1a3.addEventListener("click", disableQ1);
q1a4.addEventListener("click", disableQ1);

q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", disableQ2);
q2a3.addEventListener("click", disableQ2);
q2a4.addEventListener("click", disableQ2);

q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", disableQ3);
q3a3.addEventListener("click", disableQ3);
q3a4.addEventListener("click", disableQ3);

q4a1.addEventListener("click", disableQ4);
q4a2.addEventListener("click", disableQ4);
q4a3.addEventListener("click", disableQ4);
q4a4.addEventListener("click", disableQ4);

q5a1.addEventListener("click", disableQ5);
q5a2.addEventListener("click", disableQ5);
q5a3.addEventListener("click", disableQ5);
q5a4.addEventListener("click", disableQ5);

startover.addEventListener("click", restart);

function rebel(){
  rebelScore+=1;
  questionCount+=1;
  if (questionCount ==5){
  updateResult();
  }
} function popular(){
  popularScore+=1;
  questionCount+=1;
  if (questionCount ==5){
  updateResult();
  }
} function nerd(){
  nerdScore+=1;
  questionCount+=1;
  if (questionCount ==5){
  updateResult();
  }
} function jock(){
  jockScore+=1;
  questionCount+=1;
  if (questionCount ==5){
  updateResult();
  }
} 

function disableQ1(){
    document.getElementById("q1a1").disabled = true;
    document.getElementById("q1a2").disabled = true;
    document.getElementById("q1a3").disabled = true;
    document.getElementById("q1a4").disabled = true;
} function disableQ2(){
    document.getElementById("q2a1").disabled = true;
    document.getElementById("q2a2").disabled = true;
    document.getElementById("q2a3").disabled = true;
    document.getElementById("q2a4").disabled = true;
} function disableQ3(){
    document.getElementById("q3a1").disabled = true;
    document.getElementById("q3a2").disabled = true;
    document.getElementById("q3a3").disabled = true;
    document.getElementById("q3a4").disabled = true;
} function disableQ4(){
    document.getElementById("q4a1").disabled = true;
    document.getElementById("q4a2").disabled = true;
    document.getElementById("q4a3").disabled = true;
    document.getElementById("q4a4").disabled = true;
} function disableQ5(){
    document.getElementById("q5a1").disabled = true;
    document.getElementById("q5a2").disabled = true;
    document.getElementById("q5a3").disabled = true;
    document.getElementById("q5a4").disabled = true;
} 

function updateResult(){
  if (rebelScore > popularScore && rebelScore > nerdScore && rebelScore > jockScore){
    result.innerHTML = "You're a Rebel!";
    subResult.innerHTML = "You’re moody and you know it. You like to have an air of mystery around you.";
    document.getElementById("image").src = "images/rebel.jpg";
  } else if (popularScore > rebelScore && popularScore > nerdScore && popularScore > jockScore){
    result.innerHTML = "You're Popular!";
    subResult.innerHTML = "You love your friends and always make sure you’re caught up on the latest trends.";
    document.getElementById("image").src = "images/prep.jpg";
  } else if (nerdScore > popularScore && nerdScore > rebelScore && nerdScore > jockScore){
    result.innerHTML = "You're a Nerd!";
    subResult.innerHTML = "You are super curious and love to learn. You have huge expectations for yourself and future.";
    document.getElementById("image").src = "images/nerd.jpg";
  } else if (jockScore > popularScore && jockScore > nerdScore && jockScore > rebelScore){
    result.innerHTML = "You're a Jock!";
    subResult.innerHTML = "You are are a great team player and are serious about your health.";
    document.getElementById("image").src = "images/jock.jpg";
  } else {
    result.innerHTML = "You are Unique!";
    subResult.innerHTML = "You don't fit into one category. You were born to stand out!";
    document.getElementById("image").src = "images/unique.jpg";
  }
} function restart(){
  result.innerHTML = "Go back to the top and start over!";
  subResult.innerHTML = "";
  document.getElementById("image").src = "images/pinky.jpg";
  questionCount = 0
  rebelScore = 0;
  jockScore = 0;
  nerdScore = 0;
  popularScore = 0;
    document.getElementById("q1a1").disabled = false;
    document.getElementById("q1a2").disabled = false;
    document.getElementById("q1a3").disabled = false;
    document.getElementById("q1a4").disabled = false;
    document.getElementById("q2a1").disabled = false;
    document.getElementById("q2a2").disabled = false;
    document.getElementById("q2a3").disabled = false;
    document.getElementById("q2a4").disabled = false;
    document.getElementById("q3a1").disabled = false;
    document.getElementById("q3a2").disabled = false;
    document.getElementById("q3a3").disabled = false;
    document.getElementById("q3a4").disabled = false;
    document.getElementById("q4a1").disabled = false;
    document.getElementById("q4a2").disabled = false;
    document.getElementById("q4a3").disabled = false;
    document.getElementById("q4a4").disabled = false;
    document.getElementById("q5a1").disabled = false;
    document.getElementById("q5a2").disabled = false;
    document.getElementById("q5a3").disabled = false;
    document.getElementById("q5a4").disabled = false;
}