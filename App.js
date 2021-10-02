var readlineSync = require("readline-sync");

var score=0;
var userName = readlineSync.question("What is your name? ");

console.log("Hey Welcome To DO YOU KNOW ME? Game, Answer The Questions ")
console.log("welcome "+ userName);

function play(question,answer){
  var answer1 = readlineSync.question(question);

  if(answer1.toUpperCase()==answer.toUpperCase()){
    console.log("you are Right !!!");
    score++;
  }else{
    console.log("Wrong Answer ");
  }

console.log("Current score is "+score)
console.log("----------------------")
}

var questions = [{
   question: "Where Do i Live ? ",
   answer :"Pune"
},
{
  question: "What is My Fav Colour ? ",
  answer:"Black"
},
{
  question:"My favourite superhero ? ",
  answer:"Ironman"
}];

for(var i=0;i<questions.length;i++){
  var currentQue = questions[i];
  play(currentQue.question,currentQue.answer);
  
}
console.log("Your Final Score is "+score);

