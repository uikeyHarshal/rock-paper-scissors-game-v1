let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg"); // to access the msg in then screen like you win ,play again etc
let uWin = document.querySelector("#user-score");// accesses the User score  to  updates it on the screen
let cWin = document.querySelector("#comp-score");// acccesses the computer score


const genCompChoice = () => {
    //selects at random rock paper and sissors
    const options = ["rock", "paper", "sissors" ];
    const randomIndex = Math.floor(Math.random()* 3); //gives us numbers betn 0,2 samd id *10 we get betn 0-9
     //floor gives us the round off least value like 2.9 = 2 1.2 = etc
    return  options[randomIndex];


    };

const showWinner = (userWin) =>{
if(userWin === true){
    console.log("you win !");   
    userScore ++;
    console.log(userScore);
    uWin.innerText = userScore; //update user score // use  inner text to manipulate the inner value on the screen
    msg.innerText = "You win!"; 
    msg.style.backgroundColor = "green";
    
}else{
    console.log("you lose");
    computerScore ++;
    cWin.innerText = computerScore;
    msg.innerText ="You lose!"
    msg.style.backgroundColor = "red";
}
}    
const playGame = (userChoice) =>{
    
    //generate computer choice
    const comChoice = genCompChoice(); //function call
    console.log("computer Selected", comChoice);
    if(userChoice === comChoice) {
        //tie
        console.log("draw") 
        msg.style.backgroundColor = "#AF2BBF";
        msg.innerText = "Game was draw";
    }else{
        userWin = true;
        if(userChoice ==="rock"){
            //computer = sissors or paper
            userWin = comChoice === "paper" ? false : true; //it checks if the given condition is true then returns false else ives true is if pc played rock we lose so it makes the userWin false
        }else if(userChoice === "paper"){
            //computer = paper or sissors
            userWin = comChoice === "sissors"? false : true;// these are trnary statements
        }else {
            //computer = rock or sissors
            userWin = comChoice === "paper"? false: true;
        }
        showWinner(userWin);
    }
    
};

choices.forEach((choice)=> {
    choice.addEventListener("click", ()=>{
       const userChoice = choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice); //function call to initiate game
    });
} )