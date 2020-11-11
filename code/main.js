let winnerDeclared = false; //no one will be allowed to place a piece if someone else already won
let isTurnX = true;
let turnsLeft = 9; //decremented each time someone places a piece, when equal to zero(all spaces filled)

var numXInColumnOne = 0;//keeps track of all the variables for player X, detecting if a row column or diagonal
var numXInColumnTwo = 0;
var numXInColumnThree = 0;
var numXInRowOne = 0;
var numXInRowTwo = 0;
var numXInRowThree = 0;
var numXInDiagonalDecline = 0;
var numXInDiagonalIncline = 0;

var numOInColumnOne = 0;
var numOInColumnTwo = 0;
var numOInColumnThree = 0;
var numOInRowOne = 0;
var numOInRowTwo = 0;
var numOInRowThree = 0;
var numOInDiagonalDecline = 0;
var numOInDiagonalIncline = 0;


const play = function() {
    let cell1 = document.getElementById("1");
    let cell2 = document.getElementById("2");
    let cell3 = document.getElementById("3");
    let cell4 = document.getElementById("4");
    let cell5 = document.getElementById("5");
    let cell6 = document.getElementById("6");
    let cell7 = document.getElementById("7");
    let cell8 = document.getElementById("8");
    let cell9 = document.getElementById("9");


    cell1.addEventListener("click", () => {
        if (!(cell1.textContent == "x" || cell1.textContent == "o")) {
            if (isTurnX) {
                cell1.textContent = "x";
                numXInColumnOne++;
                numXInRowOne++;
                numXInDiagonalDecline++;
				        isTurnX = false;
            } else {
                cell1.textContent = "o";
                numOInColumnOne++;
                numOInRowOne++;
                numOInDiagonalDecline++;
				        isTurnX = true;
            }
            turnsLeft--;
        }

        console.log(isTurnX);
    });

	cell2.addEventListener("click", () => {
        if (!(cell2.textContent == "x" || cell2.textContent == "o")) {
            if (isTurnX) {
                cell2.textContent = "x";
                numXInRowOne++;
                numXInColumnTwo++;
				        isTurnX = false;
            } else {
                cell2.textContent = "o";
                numOInRowOne++;
                numOInColumnTwo++;
				        isTurnX = true;
            }
            turnsLeft--;
        }

        console.log(isTurnX);
    });

	cell3.addEventListener("click", () => {
        if (!(cell3.textContent == "x" || cell3.textContent == "o")) {
            if (isTurnX) {
                cell3.textContent = "x";
                numXInRowOne++;
                numXInColumnThree++;
                numXInDiagonalIncline++;
				        isTurnX = false;
            } else {
                cell3.textContent = "o";
                numOInRowOne++;
                numOInColumnThree++;
                numOInDiagonalIncline++;
				        isTurnX = true;
            }
            turnsLeft--;
        }

        console.log(isTurnX);
    });

	cell4.addEventListener("click", () => {
        if (!(cell4.textContent == "x" || cell4.textContent == "o")) {
            if (isTurnX) {
                cell4.textContent = "x";
                numXInRowTwo++;
                numXInColumnOne++;

				        isTurnX = false;

            } else {
                cell4.textContent = "o";
                numOInRowTwo++;
                numOInColumnOne++;
				        isTurnX = true;
            }
            turnsLeft--;
        }

        console.log(isTurnX);
    });

	cell5.addEventListener("click", () => {
        if (!(cell5.textContent == "x" || cell5.textContent == "o")) {
            if (isTurnX) {
                cell5.textContent = "x";
                numXInRowTwo++;
                numXInColumnTwo++;
                numXInDiagonalIncline++;
                numXInDiagonalDecline++;
				        isTurnX = false;
            } else {
                cell5.textContent = "o";
                numOInRowTwo++;
                numOInColumnTwo++;
                numOInDiagonalIncline++;
                numOInDiagonalDecline++;
				        isTurnX = true;
            }
            turnsLeft--;
        }

        console.log(isTurnX);
    });

	cell6.addEventListener("click", () => {
        if (!(cell6.textContent == "x" || cell6.textContent == "o")) {
            if (isTurnX) {
                cell6.textContent = "x";
                numXInRowTwo++;
                numXInColumnThree++;
				        isTurnX = false;
            } else {
                cell6.textContent = "o";
                numOInRowTwo++;
                numOInColumnThree++;
				        isTurnX = true;
            }
            turnsLeft--;
        }

        console.log(isTurnX);
    });

	cell7.addEventListener("click", () => {
        if (!(cell7.textContent == "x" || cell7.textContent == "o")) {
            if (isTurnX) {
                cell7.textContent = "x";
                numXInRowThree++;
                numXInColumnThree++;
                numXInDiagonalIncline++;
				        isTurnX = false;
            } else {
                cell7.textContent = "o";
                numOInRowThree++;
                numOInColumnThree++;
                numOInDiagonalIncline++;
				        isTurnX = true;
            }
            turnsLeft--;
        }

        console.log(isTurnX);
    });

	cell8.addEventListener("click", () => {
        if (!(cell8.textContent == "x" || cell8.textContent == "o")) {
            if (isTurnX) {
                cell8.textContent = "x";
                numXInRowThree++;
                numXInColumnTwo++;
				        isTurnX = false;
            } else {
                cell8.textContent = "o";
                numOInRowThree++;
                numOInColumnTwo++;
				        isTurnX = true;
            }
            turnsLeft--;
        }

        console.log(isTurnX);
    });

	cell9.addEventListener("click", () => {
        if (!(cell9.textContent == "x" || cell9.textContent == "o")) {
            if (isTurnX) {
                cell9.textContent = "x";
                numXInRowThree++;
                numXInColumnThree++;
                numXInDiagonalDecline++;
				        isTurnX = false;
            } else {
                cell9.textContent = "o";
                numOInRowThree++;
                numOInColumnThree++;
                numOInDiagonalDecline++;
				        isTurnX = true;
            }
            turnsLeft--;
        }

        console.log(isTurnX);
    });

};


play();

// Define all the cells for the JS file. Query selectors (getElementById?), event listeners, etc.



// When a cell is clicked, put a symbol in it. We'll worry about the actual symbols later.
// Have a player's name show up when it's their turn.
// Don't allow a cell to be clicked twice.


// When there are three of the same symbol in a row, column, or diagonal, display a win message and end the game.
// "Win" conditions:
// Group of IDs
// Row or column

// "Draw" conditions:
// No cells meet the "win" conditions
// So it's basically a big "if-else" conditional.
