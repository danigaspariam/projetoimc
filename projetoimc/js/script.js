
function calcular() {
    
let altura = parseFloat(document.getElementById("altura").value);
let peso = parseFloat(document.getElementById("peso").value);
let resultado = "";

imc = (peso / (altura * altura )).toFixed(2);

// imc = imc.toFixed(2);
if ( imc <= 18.4) {
    document.getElementById('valor').innerHTML += `${imc} e você está abaixo do seu peso `;
}else if (imc>= 18.5 && imc< 25) {
    document.getElementById('valor').innerHTML += `${imc} e você está dentro do peso ideal`;
}else if (imc >= 25 && imc< 30) {
    document.getElementById('valor').innerHTML += `${imc} e você está com sobrepeso`;
}else if (imc >= 30 && imc < 35) {
    document.getElementById('valor').innerHTML += `${imc} e você está com obesidade grauI`;    
}else if (imc >= 35 && imc < 40) {
    document.getElementById('valor').innerHTML += `${imc} e você está com obesidade grauII`;       
}else if (imc >= 40) {
    document.getElementById('valor').innerHTML += `${imc} e você está com obesidade grau III`;
      
    
}

}