document.getElementById("GenerateBill").addEventListener('click',E_Bill);

function E_Bill(){
    const name = document.getElementById("consumerName").value;
    const id = document.getElementById("consumerId").value;
    const NewBill = document.getElementById("e-bill");

    const Bill = Math.floor(Math.random() * 10000);
    const root = document.createElement('p');
    root.innerHTML=`
    <h3>Total Bill ${Bill}</h3>
    `
    NewBill.appendChild(root);
}

