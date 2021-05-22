var readlineSync = require('readline-sync');
const chalk = require('chalk');

var score = 0;

var userName = readlineSync.question(chalk.cyanBright('Whats ur name? '));
console.log()



console.log(chalk.green("welcome! " +userName.toUpperCase() + " Lets see do you know OOPS concept. \n" + "Here are the question."));console.log()


function quizGame(question,answer){
  var userAnswer=readlineSync.question(question)
  if(userAnswer.toUpperCase()===answer.toUpperCase())
  {
    console.log(chalk.red("your answer is right"))
    score++;
    console.log(chalk.magentaBright("your score is",score ))

    console.log();

  }
  else{
    console.log(chalk.red("your answer is wrong"))
    
    console.log(chalk.magentaBright("your score is",score ))

    console.log();


  }
}

var questions=[
 {
    question:chalk.blueBright("1. What is an object \n a:instance of class\n b:instance of object\n c:instance of method\n Ans: "),
    answer:"a"
 } ,
 {
    question:chalk.blueBright("2. Which constructor has no parameters? \n a:default constructor\n b:Copy constructor\n c:parametric constructor\n Ans: "),
    answer:"a"
 } ,
 {
    question:chalk.blueBright("3. Which of the following is associated with objects? \n a:State\n b:Behaviour\n c:identity\n d:All of The Above\n Ans: "),
    answer:"d"
 } ,
 {
    question:chalk.blueBright("4. 7. Which type of constructor can’t have a return type? \n a:Default\n b:Parameterized\n c:Copy\n d:Constructors don’t have a return type\n Ans: "),
    answer:"d"
 } ,
 {
    question:chalk.blueBright("4. How many types of constructors are available, in general, in any language? \n a:2\n b:3\n c:4\n 4:5\n Ans: "),
    answer:"b"
 } ,

]
var i = 0

do{
  var currentQuestions = questions[i]
  userAnswer = quizGame(currentQuestions.question, currentQuestions.answer)
  i++;
}
while(i<questions.length)

if(score>=3){
console.log(chalk.yellow('WELLDONE!' ,userName.toUpperCase(), ' Total score is ',score))
}else{
  console.log(chalk.yellow('Try Again :( ', userName.toUpperCase(),' \nTotal score is :' ,score))
}
