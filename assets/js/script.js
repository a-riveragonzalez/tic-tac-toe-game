// ****************** Reference variables ******************//
const container = $("#container");

// ****************** Global variables ******************//
let winCount = 0;
let loseCount = 0;


// ********************* Functions ********************//

// if click, add x
// if click, add o 
function clickXO (elementClicked) {
    if (elementClicked.textContent===""){
        $(elementClicked).text("X");
    } else{
        console.log("already taken")
    }

    // $(elementClicked).text("X");
    // console.log(elementClicked.textContent);
}


function checkWin() {
    // if three in a row, win message
    // else continue game 
}

function playGame (event) { 
    const elementClicked = event.currentTarget.firstElementChild;

    clickXO(elementClicked);
    // if (elementClicked)
    // $(elementClicked).text("X");
    // console.log(elementClicked.textContent);

    // clickx or clicko
    // check if win 
 }

// ****************** Calling Functions ******************//
container.on("click", "div", playGame)
