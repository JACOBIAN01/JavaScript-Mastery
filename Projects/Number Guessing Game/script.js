document.getElementById('button').addEventListener('click',Show)
document.getElementById("help").addEventListener("click", help);
const randomNumber = Math.floor(Math.random() * 100);

function help(){
  const res = document.getElementById("result");
  const newText = document.createElement('p');
  newText.textContent=`Answer is ${randomNumber}`;
  res.appendChild(newText);
}

function Show(){
const res = document.getElementById("result");
res.innerHTML="";
const numberInput = document.getElementById("numberInput").value;
if (randomNumber == numberInput) {
 const newText = document.createElement('p');
 newText.textContent="Correct Guess!";
 res.appendChild(newText);
}
if (randomNumber != numberInput) {
  const newText = document.createElement("p");
  newText.textContent = "Wrong Guess!";
  res.appendChild(newText);
}
}

