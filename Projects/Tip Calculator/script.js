document.getElementById('calc').addEventListener('click',TipCal);
const mydiv = document.getElementById('Tip')


function TipCal(){
    mydiv.innerHTML=""
    const bill = document.getElementById('bill-input').value;
    const tipP = document.getElementById("tip-input").value;
    const tip = document.createElement('p')
    const TipAmount = (bill*tipP)/100;
    tip.textContent=`Your Tip  is ${TipAmount} Rupees`
    mydiv.appendChild(tip)
}
