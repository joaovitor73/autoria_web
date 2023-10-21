let peso = document.getElementById("peso");
let altura = document.getElementById("altura");
let resultado = document.getElementById("resultado");
let teste;

const podeCalcular = () => {
    if(peso.value > 0 && altura.value > 0 && altura.value < 3)
        calcular();
    else alert("Preencha os campos corretamente")
}
const calcular = () => {
    resultado.style.visibility = "visible";
    let imc = peso.value / (altura.value * altura.value);
    let classificacao = "";
    if(imc < 18.5) classificacao = "Magreza";
    else if(imc < 25) classificacao = "Normal";
    else if(imc < 30) classificacao = "Sobrepeso";
    else if(imc < 40) classificacao = "Obesidade";
    else classificacao = "Obesidade Grave";
    resultado.innerHTML = classificacao + " - IMC: " + imc.toFixed(2);
}

const limpar = () => {
    resultado.style.visibility = "hidden";
    peso.value = "";
    altura.value = "";
}


