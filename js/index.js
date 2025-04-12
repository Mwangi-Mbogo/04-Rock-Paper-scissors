
const handOptions = {
  "rock": "/assets/Rock.png",
  "paper": "/assets/Paper.png",
  "scissors": "/assets/Scissors.png"
}

let SCORE = 0;

const pickUserHand = (hand) =>{
  console.log(hand);
  // hide the current page

  let hands = document.querySelector(".hands");
  hands.style.display = 'none';
  // show the next page with the hand you picked

  let contest = document.querySelector(".contest");
  contest.style.display = 'flex';

  // set the user pick
    document.getElementById("userPickImage").src = handOptions[hand];

    let cpHand = pickComputerHand();
    referre(hand, cpHand);
}

const pickComputerHand = () =>{
  let hands = ["rock", "paper", "scissors"];
  let cpHand = hands[Math.floor(Math.random() * 3)]

   // set the computer pick
   document.getElementById("computerPickImage").src = handOptions[cpHand];

   return cpHand;
}

const referre = (userHand, cpHand)=>{
  if (userHand == "paper" && cpHand == "scissors") {
    setDecision("YOU LOSE!");
  }
  if (userHand == "paper" && cpHand == "rock") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (userHand == "paper" && cpHand == "paper") {
    setDecision("It's a tie!");
  }
  if (userHand == "rock" && cpHand == "scissors") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (userHand == "rock" && cpHand == "paper") {
    setDecision("YOU LOSE!");
  }
  if (userHand == "rock" && cpHand == "rock") {
    setDecision("It's a tie!");
  }
  if (userHand == "scissors" && cpHand == "scissors") {
    setDecision("It's a tie!");
  }
  if (userHand == "scissors" && cpHand == "rock") {
    setDecision("YOU LOSE!");
  }
  if (userHand == "scissors" && cpHand == "paper") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
}

const restartGame = () =>{
  let hands = document.querySelector(".hands");
  hands.style.display = 'flex';
  // show the next page with the hand you picked

  let contest = document.querySelector(".contest");
  contest.style.display = 'none';
}

const setDecision = (decision)=>{
  document.querySelector(".decision h1").innerText = decision; 
}

const setScore = (score)=>{
  SCORE = score;
  document.querySelector(".score h1").innerText = score;
}