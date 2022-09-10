// ****************** Reference variables ******************//
const container = $("#container");
const winningCardEl = $(".winning-card");
const resetbtnEl = $(".restart-btn");
const cardHeaderEl = $(".card-heading"); 
const cardScoreEl = $(".p-custom"); 

// ****************** Global variables ******************//
let isPlayer2Turn = false;
let playerWinner = ""; 
let winXCount = 0;
let winOCount = 0;

// ********************* Functions ********************//
function getLocalStorage(){
  // if keys does not exist, make an empty slot in local storage
  if (!localStorage.getItem("winXCount") || !localStorage.getItem("winOCount")) {
    localStorage.setItem("winXCount", "0");
    localStorage.setItem("winOCount", "0");
  } else {
    winXCount = localStorage.getItem("winXCount");
    winOCount = localStorage.getItem("winOCount");
  }
}

function clickXO (elementClicked) {
    if (elementClicked.textContent==="" && isPlayer2Turn === false){
        $(elementClicked).text("X");
        isPlayer2Turn = true;
    } else if (elementClicked.textContent==="" && isPlayer2Turn === true){
        $(elementClicked).text("O");
        isPlayer2Turn = false;
    }
    else{
        console.log("already taken")
    }
}

function checkWin() {
    const cell1 = $("#1")[0].firstElementChild.textContent;
    const cell2 = $("#2")[0].firstElementChild.textContent;
    const cell3 = $("#3")[0].firstElementChild.textContent;
    const cell4 = $("#4")[0].firstElementChild.textContent;
    const cell5 = $("#5")[0].firstElementChild.textContent;
    const cell6 = $("#6")[0].firstElementChild.textContent;
    const cell7 = $("#7")[0].firstElementChild.textContent;
    const cell8 = $("#8")[0].firstElementChild.textContent;
    const cell9 = $("#9")[0].firstElementChild.textContent;

    if (
        (cell1 != "" && cell1 === cell2 && cell2 === cell3) ||
        (cell4 != "" && cell4 === cell5 && cell5 === cell6) ||
        (cell7 != "" && cell7 === cell8 && cell8 === cell9) ||
        (cell1 != "" && cell1 === cell4 && cell4 === cell7) ||
        (cell2 != "" && cell2 === cell5 && cell5 === cell8) ||
        (cell3 != "" && cell3 === cell6 && cell6 === cell9) ||
        (cell1 != "" && cell1 === cell5 && cell5 === cell9) ||
        (cell3 != "" && cell3 === cell5 && cell5 === cell7) 
    ) {
        endGame();
    } else if (cell1!="" && cell2!="" && cell3!="" && cell4!="" && cell5!="" && cell6!="" && cell7!="" && cell8!="" && cell9!=""){
        endGameTie();
    } else {
        console.log("continue game");
    }

}

function endGame() { 
    if (isPlayer2Turn === false) {
        console.log("player O wins");
        winOCount++;
        playerWinner = "player2";
    } else {
        console.log("player X wins");
        winXCount++;
        playerWinner = "player1";
    }

    localStorage.setItem("winOCount" , winOCount);
    localStorage.setItem("winXCount" , winXCount);

    displayEndCard();
}

function endGameTie() {
    console.log("it's a tie")
    playerWinner = "tie";
    displayEndCard();
}

function displayEndCard() { 
    winningCardEl.attr("style", "display:block")
    // edit the winning card 
    if (playerWinner === "player1"){
        cardHeaderEl.text("Player X Wins!")
    } else if (playerWinner === "player2") {
        cardHeaderEl.text("Player O Wins!")
    } else {
        cardHeaderEl.text("It's a tie!")
    }

    cardScoreEl.text("Player X: " + winXCount + " | Player O: " + winOCount);

}

function playGame (event) { 
    const elementClicked = event.currentTarget.firstElementChild;

    clickXO(elementClicked);

    checkWin();
}

// ****************** Calling Functions ******************//
container.on("click", "div", playGame);
resetbtnEl.on("click", function(){
    location.reload();
})
getLocalStorage();