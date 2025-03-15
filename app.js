let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-button");
let newbtnGame = document.querySelector("#new-button");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;// playerx , playero
let moves = 0; // To track draw condition

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame = () => {
    turnO=true;
    moves = 0; // Moves counter reset karna zaroori hai
     enableBoxes();
     msgContainer.classList.add("hide");
};
boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        // console.log("box was clicked");
    if(turnO){
        box.innerText = "O";
        turnO = false;
    }else{
        box.innerText = "X";
        turnO = true;

    }
    box.disabled = true;
    moves++;
    checkWinner();
    });
}
);
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner = (winner) => {
   msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (let pattern of winPatterns){
     let pos1val = boxes[pattern[0]].innerText;
     let pos2val = boxes[pattern[1]].innerText;
     let pos3val = boxes[pattern[2]].innerText;
      
     if(pos1val !="" && pos2val != ""){
        if(pos1val === pos2val && pos2val === pos3val){
            // console.log("winner",pos1val);
            showWinner(pos1val);
            return;
        }
     }
    }
    // Check for draw
    if (moves === 9) {
        msg.innerText = "Game Draw!";
        msgContainer.classList.remove("hide");
    }

};

// **Fixing button event listeners**
newbtnGame.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);
