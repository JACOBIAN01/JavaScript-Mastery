document.getElementById('random').addEventListener('click',GeneratePassword);
const characters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
const Result = document.getElementById("password");


function GeneratePassword(){
    const Number = Math.floor(Math.random()*100);
    let i =4;
    let text = '';
    for(i=0;i<4;i++){
        text =text+characters[Math.floor(Math.random() * characters.length)]; 
    }
    const password =text+String(Number);
    const res = document.createElement('p')
    res.textContent = `Your Password is ${password}`;
    Result.appendChild(res);
}

