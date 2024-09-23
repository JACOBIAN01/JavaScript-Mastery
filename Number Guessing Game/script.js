const randomNumber = Math.floor(Math.random()*100);


document.getElementById('button').addEventListener('click',Show())

function Show(){
const numberInput = document.getElementById("numberInput");
const My_number = numberInput.value;
document.getElementById("");
if (randomNumber == My_number) {
  const res = document.getElementById("res");
  document.getElementById("res").innerHTML = `
Correct ANswer!
`;
} else {
  document.getElementById("res").innerHTML = `<h4>
Correct ANswer!</h4>
`;
}
}

