let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".rst-btn");
let newbtn=document.querySelector(".new-btn");
let msg=document.querySelector("#msg");
let msgcontainer=document.querySelector(".msg-container")
 let turnO=true;
 let winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
 ];
 boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("clicked")
        if(turnO){
            box.innerHTML="O";
            turnO=false;
        }else{
            box.innerHTML="X";
            turnO=true;
        }
        box.disabled=true;

        checkwinner();
    })
 })
 const enablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
        box.innerHTML="";
    }
 }

const resetgame=()=>{
    turnO=true;
    enablebox();
    msgcontainer.classList.add("hide");
}

 const checkwinner=()=>{
    for(pattern of winpattern){
        let pos1=boxes[pattern[0]].innerHTML;
        let pos2=boxes[pattern[1]].innerHTML;
        let pos3=boxes[pattern[2]].innerHTML;
        if(pos1!=""&&pos1!=""&&pos2!=""){
            if(pos1===pos2&&pos2===pos3){
                console.log("winner",pos1);
                showwinner(pos1);
            }
        }
    }
 }
 const showwinner=(winner)=>{
    msg.innerHTML=`congratulation ,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebox();
 }
 const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
 }

newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);