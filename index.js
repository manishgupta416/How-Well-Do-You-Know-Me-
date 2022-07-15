// var readlineSync = require('readline-sync')
import chalk from 'chalk';
import readlineSync from 'readline-sync'
var userName = readlineSync.question('May I Know Your Name? ')
console.log(chalk.blue("Welcome " + userName ))
console.log(chalk.red("Let's see how well do you know me ? \n"))



var score = 0;

var highScores = [
  {
    name:"Manish",
    score: 10,
  },
  {
    name:"Mayank",
    score: 6,
  },
]


var questionsList = [
  {
    question:"Q1.Which is my favourite superhero ? \na.superman \nb.batman \nc.ironman \nd.spiderman \nEnter your answer : ",
    answer :'a'
  },
    {
    question:"Q2.Which is my favourite song ? \na.Humdard \nb.Channa Mereya \nc.Kabira \nd.Piya O Piya \nEnter your answer : ",
    answer :'b',
  },
  {
    question:"Q3.Which is my favourite sad movie ? \na.Tadap \nb.Shidaat \nEnter your answer : ",
    answer :'b',
  },
  {
    question:"Q4.Which is my favourite TV serial ? \na.Taarak Mehta Ka Ooltah Chashmah \nb.Baalveer \nc.Aladin \nEnter your answer : ",
    answer :'a',
  },
  {
    question:"Q5.What is my zodiac sign? \na.Leo \nb.Cancer \nc.Aries \nd.Vigro \nEnter your answer : ",
    answer :'a',
  },
    {
    question:"Q5.Which is my favourite South Indian actor?\na.Mahesh Babu \nb.Rajinikanth \nc.Allu Arjun \nd.Thalapathy Vijay \nEnter your answer : ",
    answer :'a',
  },
    {
    question:"Q6.Which is my favourite Bollywood actor? \na.Amir Khan \nb.Akshay Kumar \nc.Hrithik Roshan \nd.Sharukh Khan \nEnter your answer : ",
    answer :'b',
  },
    {
    question:"Q7.Which is my favourite Bollywood actress? \na.Mrunal Thakur \nb.Jacqueline Fernandez \nc.Kriti Sanon \nd.Katrina Kaif \nEnter your answer : ",
    answer :'a',
  },
    {
    question:"Q8.Which is my favourite South Indian actress? \na.Shruti Hassan \nb.Rashmika Mandanna \nc.Tamannah Bhatia \nd.Nithya Menen \nEnter your answer : ",
    answer :'d',
  },
      {
    question:"Q9.When I celebrate my birthday? \na.06 June \nb.03 June \nc.06 September \nd.03 September \nEnter your answer : ",
    answer :'d',
  },
      {
    question:"Q10.Can you guess the first Letter of my school crush? \na.M \nb.S \nc.P \nd.N \nEnter your answer : ",
    answer :'c',
  },
      {
    question:"Q11.Can you guess the first Letter of my college crush? \na.P \nb.M \nc.K\nd.S \nEnter your answer : ",
    answer :'b',
  },
  
  
]

function play (question, answer) {
  var userAnswer = readlineSync.question(question)
 
  if(userAnswer.toLowerCase() == answer.toLowerCase()) {
     console.log(chalk.green("Yes You are right"))
    score = score + 1

  } else{
    console.log(chalk.red("Oops You are wrong"))
  } 
    console.log("Your Current Score : " + score)
    console.log("______________________________\n")
}

//loop to traverse question and answer
for(var i =0 ; i<questionsList.length ; i++) {
  var currentQuestion = questionsList[i].question 
  var currentAnswer =questionsList[i].answer

  play(currentQuestion, currentAnswer)  
}
 console.log(chalk.cyan("You Scored : " + score))


for(var i=0 ; i<highScores.length ; i++) {
  currentUserName = highScores[i].name
  currentUserScore = highScores[i].score

  if(currentUserScore < score) {
  console.log(chalk.yellow(`Congratulation You have Beaten 
  ${currentUserName} highScore. Send me a screenshot to update you in my records`))
  }
}