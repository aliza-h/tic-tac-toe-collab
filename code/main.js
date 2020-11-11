let winnerDeclared = false; //no one will be allowed to place a piece if someone else already won
let isTurnX = true;
let turnsLeft = 9; //decremented each time someone places a piece, when equal to zero(all spaces filled)

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
				isTurnX = false;
            } else {
                cell1.textContent = "o";
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
				isTurnX = false;
            } else {
                cell2.textContent = "o";
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
				isTurnX = false;
            } else {
                cell3.textContent = "o";
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
				isTurnX = false;

            } else {
                cell4.textContent = "o";
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
				isTurnX = false;
            } else {
                cell5.textContent = "o";
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
				isTurnX = false;
            } else {
                cell6.textContent = "o";
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
				isTurnX = false;
            } else {
                cell7.textContent = "o";
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
				isTurnX = false;
            } else {
                cell8.textContent = "o";
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
				isTurnX = false;
            } else {
                cell9.textContent = "o";
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
