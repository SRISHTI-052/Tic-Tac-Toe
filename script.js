let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGame=document.querySelector("#new-button");
let msgContainer=document.querySelector(".messageDisplay");
let msgGiven=document.querySelector("#msg");




let turnOfO=true;

const winningPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
    ];
const resetGame=() =>
{
    turnOfO=true;
    enableBoxes();
    msgContainer.classList.add("hide");

}
boxes.forEach((box)=>
{box.addEventListener('click',()=>
{console.log("box was clicked");
if(turnOfO)
{
   box.innerText ="O";
   turnOfO=false;
   box.style.color ='#2C1320'; 
}
else
{
    box.innerText ="X";  
    turnOfO=true;
    box.style.color='#2C1320'; 
}
box.disabled=true;
checkForWinner();
} );});

const disableBoxes=() =>
{
    for (let box of boxes)
    {
       box.disabled=true;

    }
};
const enableBoxes=() =>
{
    for (let box of boxes)
    {
       box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner) =>{
    msgContainer.innerText=`Congratulations, the winner is player with number ${winner}`;
    msgContainer.style.color = '#9F7AAD';
     msgContainer.style.fontWeight = 'bold';
     msgContainer.style.fontSize='20px';
     msgContainer.style.paddingTop='10px';
     msgContainer.style.paddingBottom='10px';
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkForWinner = () =>
{
    for(pattern of winningPattern){
        let position1Value=boxes[pattern[0]].innerText;
        let position2Value=boxes[pattern[1]].innerText;
        let position3Value=boxes[pattern[2]].innerText;
        
        if(position1Value != "" &&
        position2Value != "" &&
        position3Value != ""
        )
        {

            if(position1Value === position2Value &&
                position2Value === position3Value)
              
           {     console.log("winner");
showWinner(position1Value);
return;

           }
        }
    }
};

newGame.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
