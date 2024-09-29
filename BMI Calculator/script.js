document.getElementById('calc').addEventListener('click',CalcBMI);
const BMI_Value = document.getElementById("bmi-value");
const BMI_Status = document.getElementById('bmi-status');

function CalcBMI(){
    const height = document.getElementById("height-input").value;
    const weight = document.getElementById("weight-input").value;

    const BMI = weight/(height*height);
    const bmi_value = document.createElement('p');
    bmi_value.textContent = `Your BMI is ${BMI}`;
    BMI_Value.appendChild(bmi_value);

    const status = document.createElement('p');
    if (BMI>30){
        status.textContent=`You are Over Weight`;
    }
    else{
         status.textContent=`You are Over Weight`;
    }
    BMI_Status.appendChild(status);
}
