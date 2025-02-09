document.getElementById('random').addEventListener('click',GeneratePassword);
const characters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
const Result = document.getElementById("password");


function GeneratePassword(){
    Result.innerHTML='';
    const Number = Math.floor(Math.random()*100);
    let n = document.getElementById('length').value;
    if(n>=5){     
let text = "";
for (i = 0; i < n - 2; i++) {
  text = text + characters[Math.floor(Math.random() * characters.length)];
}
const password = text + String(Number);
const res = document.createElement("p");
res.textContent = `Your Password is => ${password}`;
Result.appendChild(res);
    }else{
alert("Size must be equal or grater than 5")
    }
    
}

