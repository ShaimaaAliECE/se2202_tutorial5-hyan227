let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game

document.getElementById('next-lbl').innerText = nextPlayer;
// use the value stored in the nextPlayer variable to indicate who the next player is


//This call will create the buttons needed for the gameboard.
createGameBoard();
 
function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
 
    for (let i = 1; i <= 9; i++)
    {
        document.getElementById('c' + i).innerHTML = `<button id='cell-btn'>‎‎‎‎‎‏‏‎ ‎‎‎‎‎‏‏‎ ‎‏‏‎</button>`;
    }

}
// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    let btned =event.target;
    btned.innerHTML= nextPlayer;
    if (nextPlayer == 'X') 
    {
        nextPlayer = 'O'
    } 
    else
    {
        nextPlayer = 'X'
    } 
    document.getElementById('next-lbl').innerText = nextPlayer;
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
        
    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )
       btned.disabled = true;
    // Check if the game is over
    if (isGameOver())
    {
        let lbl = document.getElementById('game-over-lbl');
        var header = document.createElement('h1');
        header.innerText='Game Over';
        lbl.appendChild(header);
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    let k=0;
    for (let i=0; i<btns.length; i++)
    {
       if(btns[i].disabled){
          k= k+1;
       }
    }
    if(k==btns.length)
    return true;
    else return false;   
    // This function returns true if all the buttons are disabled and false otherwise 
   
}
