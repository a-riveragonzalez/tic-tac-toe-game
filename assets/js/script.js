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
    if (){
        // if three in a row, win message

    } else {
        // else continue game 

    }

}

function playGame (event) { 
    const elementClicked = event.currentTarget.firstElementChild;

    clickXO(elementClicked);

    checkWin();
}

// ****************** Calling Functions ******************//
container.on("click", "div", playGame)
