#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import ChalkAnimation from "chalk-animation";

//i have created a new promise which will be resolved in 2 sec in order to run my chalk animation for 2 seconds

const sleep = () =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, 2000);
  });

async function welcome() {
  const rainbow = ChalkAnimation.rainbow("welcome to guess game");
  await sleep();
  rainbow.stop();
}

//declaring and initializing the lifes out of the function so that we can access it in other functions as well
let lifes = 2;
async function askQuestion() {

    
  let random = Math.floor(Math.random() * 10 + 1);

//used do while loop in order to achieve lifes system
  do {
  let que = await inquirer.prompt([
    {
      //type is used to determine the input type of user answer
      type: "number",
      //it is the name of variable in which our answer will be stored
      name: "user_num",
      //this is the msg that will be displayed on CLI to user for assistance of input
      message: "select any number between 1-10 : ",
      //this is used the validate that the user has entered the valid input or not
      validate(answers: number) {
        //isNAN is a build in func that checks whether a value is of type number or not
        if (isNaN(answers)) {
          //if input is not a number type then we show an error statement using chalk ,to the user
          return chalk.rgb(212,112,123)("please enter a valid number !");
        }
        return true;
      },
    },
  ]);


  //now we will check whether the user guessed the right number or not?
 console.log(random)
      if (que.user_num === random) {
        console.log(
          chalk.green("congratulations you have guessed the right number!!!")
        );
        
        //break the loop as u get the right answer.
        break;
      } else if (que.user_num < random) {
        console.log(chalk.rgb(212,112,123)(`${que.user_num} is less than the answer`));
        --lifes;
        console.log(chalk.rgb(212,112,123)(`your lifes remainigs are ${lifes}`))
      } else if (que.user_num > random) {
        console.log(chalk.rgb(212,112,123)(`${que.user_num} is greater than the answer`));
        --lifes;
        console.log(chalk.rgb(212,112,123)(`your lifes remainigs are ${lifes}`))
      }
      if(lifes===0) console.log(chalk.rgb(212,112,123)("you lost the game better luck next time!!!"))
      
  } while (lifes>0);
}
// welcome();

async function startAgain(){
do {
    lifes=2;
    await welcome()
    await askQuestion();
    var again = await inquirer.prompt([
        {
          //type is used to determine the input type of user answer
          type: "string",
          //it is the name of variable in which our answer will be stored
          name: "choice",
          //this is the msg that will be displayed on CLI to user for assistance of input
          message: "do u want to restart the game ??? ",
          //this is used the validate that the user has entered the valid input or not
         
        },
      ]);

} while (again.choice === "y");
}

startAgain()


// 