// ****************** Reference variables ******************//
const container = $("#container");

// ****************** Global variables ******************//
let winCount = 0;
let loseCount = 0;


// ********************* Functions ********************//
function clickXO (event) { 
    console.log(event);
    
 }

// ****************** Calling Functions ******************//
container.on("click", "div", clickXO)
