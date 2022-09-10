// ****************** Reference variables ******************//
const container = $("#container");

// ****************** Global variables ******************//
let isPlayer2Turn = false;
let winCount = 0;
let loseCount = 0;
const winningArray = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9], 
    [1, 4, 7], 
    [2, 5, 8], 
    [3, 6, 9], 
    [1, 5, 9], 
    [3, 5, 7], 
]


// ********************* Functions ********************//

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
        console.log("You win!")
        // if isPlayer2Turn X wins, else O wins 
    } else {
        console.log("continue game")

    }

}

function playGame (event) { 
    const elementClicked = event.currentTarget.firstElementChild;

    clickXO(elementClicked);

    checkWin();
}

// ****************** Calling Functions ******************//
container.on("click", "div", playGame)
