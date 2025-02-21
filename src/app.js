import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


const suits = ["♦", "♥", "♠", "♣"];

const valuesCard = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "A", "K", "Q", "J"];

function generateRandomCard() {

  const randomSuitIndex = Math.floor(Math.random() * suits.length);
  const randomSuitValue = suits[randomSuitIndex];  

  
  const valueIndexCard = Math.floor(Math.random() * valuesCard.length);
  const randomValueCard = valuesCard[valueIndexCard];

  
  console.log("randomCard: ${randomValueCard} ${randomSuitValue}");


  let topSuitElement= document.getElementById("top-suit")
  topSuitElement.innerText = randomSuitValue

  
  let cardValueElement=document.getElementById("card-value")
  cardValueElement.innerText = randomValueCard; 

  let bottomSuitElement=document.getElementById("bottom-suit")
  bottomSuitElement.innerText = randomSuitValue;

  if (randomSuitValue === "♥" || randomSuitValue === "♦") {
    topSuitElement.classList.add("red-suit");
    bottomSuitElement.classList.add("red-suit");
  } else {
    topSuitElement.classList.remove("red-suit");
    bottomSuitElement.classList.remove("red-suit");
  }
}

window.onload = generateRandomCard;
