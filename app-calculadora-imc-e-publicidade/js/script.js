function hardResponse() {
  var tela = window.screen.width

  if (tela < 768) {
    document.getElementById('vitrine').classList.remove('row-cols-2');
    document.getElementById('vitrine').classList.add('row-cols-1')
  }
  if (tela >= 768) {
    document.getElementById('vitrine').classList.add('row-cols-2');
    document.getElementById('vitrine').classList.remove('row-cols-1')
  }
}

var tela = window.screen.width

if (tela < 768) {
  document.getElementById('vitrine').classList.remove('row-cols-2');
  document.getElementById('vitrine').classList.add('row-cols-1')
}

var i = 0;
var txt = 'O IMC é uma medida da magreza ou corpulência de uma pessoa com base em sua altura e peso e destina-se a quantificar a massa do tecido. É amplamente utilizado como um indicador geral se uma pessoa tem um peso corporal saudável para sua altura. Especificamente, o valor obtido a partir do cálculo do IMC é usado para categorizar se uma pessoa está abaixo do peso, peso normal, sobrepeso ou obeso, dependendo de qual intervalo o valor está.';
var speed = 40;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter()

function calculo() {
  var altura = document.getElementById('altura').value
  var peso = document.getElementById('peso').value
  var classificacao = null

  altura = parseFloat(altura)
  peso = parseFloat(peso)
  altura /= 100

  var M = peso / (altura * altura)
  M = M.toFixed(2)
  
  if (M < 16) {
    classificacao = "Baixo peso muito grave"
  } else if (M >= 16 && M < 16.99) {
    classificacao = "Baixo peso grave"
  } else if (M >= 17 &&  M < 18.49) {
    classificacao = "Baixo peso"
  } else if (M >= 18.5 &&  M < 24.99) {
    classificacao = "Peso normal"
  } else if (M >= 25 &&  M < 29.99) {
    classificacao = "Sobrepeso"
  } else if (M >= 30 &&  M < 34.99) {
    classificacao = "Obesidade grau I"
  } else if (M >= 35 &&  M < 39.99) {
    classificacao = "Obesidade grau II"
  } else if (M > 40) {
    classificacao = "Obesidade grau III"
  }
  
  document.getElementById('result').innerHTML = (`Você possui IMC igual a ${M}, sendo considerado como: ${classificacao}`)
}  

function limpa() {
  document.getElementById('altura').value = ''
  document.getElementById('peso').value = ''
  document.getElementById('result').innerHTML = 'Insira sua altura e peso...'
}