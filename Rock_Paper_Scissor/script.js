function getComputerChoice(){
    const choice = ["rock","paper","scissor"];
    const randomindex = Math.floor(Math.random()*choice.length);
    return choice[randomindex];
}

function Winner(player,computer){
    if(player==computer){
        return "It's a tie";
    }
    if(
        (player==="rock"&&computer=="scissor")||(player==="paper"&&computer=="rock")||(player==="scissor"&&computer=="paper")
    ){
        return "You Won!"
    }
    return "You Lose!"
}

document.getElementById("checkbutton").addEventListener('click',playgame);

function playgame(){
    const  user = document.getElementById("userinput").value.toLowerCase();
    const computer = getComputerChoice();
    const result = Winner(user,computer);

    document.getElementById("result").innerHTML = `
    <h3>Your Choose ${user}</h3>
    <h3>Computer Choose ${computer}</h3>
    <h2>${result}</h2>
    `;
  
};

