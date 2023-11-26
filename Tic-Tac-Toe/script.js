

console.log("Welcome to Tic Tac Toe");

let music = new Audio("./image and sound/backgroundsound.mp3");
let audioTurn = new Audio("./image and sound/turn.mp3");
let gameover = new Audio("./image and sound/gameover.mp3");
let turn = "x";


// Change the turn function
const changeTurn = () => {
    return turn === "x" ? "o" : "x";
}

// Function to check win
const checkWin = () => {
    let (boxtext)=>
    {
        
    }
   
}

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn= changeTurn();
            audioTurn.play();
            music.play();
            gameover.play();
            checkWin();
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        }
    });
});
