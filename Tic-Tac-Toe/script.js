

console.log("Welcome to Tic Tac Toe");

let music = new Audio("./image and sound/backgroundsound.mp3");
let audioTurn = new Audio("./image and sound/turn.mp3");
let gameover = new Audio("./image and sound/gameover.mp3");
let turn = "x";
let isgameover= false;

// Change the turn function
const changeTurn = () => {
    return turn === "x" ? "o" : "x"
}

// Function to check win
const checkWin = () => {
    let  boxtext =document.getElementsByClassName('boxtext')
        
let wins=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],
[0,4,8],[2,4,6],]
  wins.forEach(e=>{
    if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && 
        (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && 
        (boxtext[e[0]].innerText !== "")) {
        document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
        isgameover = true;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="150px"
     // Stop background music
     music.pause();
     music.currentTime = 0;

     // Play game over music
     gameover.play();
    }
})

}

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
           
        // Check if the game is already over
           if (isgameover) {
            return;
        }

        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn= changeTurn();
            audioTurn.play();
            music.play();
            gameover.play();
            checkWin();
            if(!isgameover){ 
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        }
        }
    });
});

//add onClick Listner to reset button

id.addEventListener('click',(e)=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
})