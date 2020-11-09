var winnerDeclared = false;//no one will be allowed to place a piece if someone else already won
var isTurnX = true;
var turnsLeft = 9;//decremented each time someone places a piece, when equal to zero(all spaces filled)

const play = function(){
  var cell1 = document.getElementById("1");
  var cell2 = document.getElementById("2");
  var cell3 = document.getElementById("3");
  var cell4 = document.getElementById("4");
  var cell5 = document.getElementById("5");
  var cell6 = document.getElementById("6");
  var cell7 = document.getElementById("7");
  var cell8 = document.getElementById("8");
  var cell9 = document.getElementById("9");


  cell1.addEventListener("click",() => {
    if (!(cell1.textContent == "x" || cell1.textContent == "o"))
    {
    if (isTurnX){
      cell1.textContent = "x";

    }
    else {
      cell1.textContent = "o";
    }
    moves--;
    isTurnX = !isTurnX;
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
