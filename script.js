let nome, peso, altura;

function calcularIMC() {
    nome = document.getElementById('nome').value;
    peso = parseFloat(document.getElementById('peso').value);
    altura = parseFloat(document.getElementById('altura').value);

    if (nome ===''|| isNaN(peso)|| isNaN(altura) || altura <=0 ||peso<=0){
        alert('Por favor, preencha todos os campos corretamente.');
    } else {
        
    let imc = peso / (altura * altura);
    let resultado = '';

    if (imc < 18.5) {
        resultado = 'Abaixo do peso';
    } else if (imc < 25) {
        resultado = 'Peso Normal';
    } else if (imc < 30) {
        resultado = 'Sobrepeso';
    } else {
        resultado = 'Obesidade';
    }

    document.getElementById('resultado').innerText = `${nome}, seu IMC é ${imc.toFixed(2)}. ${resultado}.`;
    }

}

function resetarValores() {
    document.getElementById('nome').value = '';
    document.getElementById('peso').value ='';
    document.getElementById('altura').value ='';
    document.getElementById('resultado').innerText='';
}