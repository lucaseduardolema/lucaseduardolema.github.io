const text1 = `Olá Mundo! Eu sou o Lucas`;
const text2 = `fullstack web developer`;
let contador1 = 0;
let contador2 = 0;
const speed = 40;
const speed2 = 120;

function inputH1() {
  if (contador1 < text1.length) {
    document.getElementById('apresentacao').innerHTML += text1.charAt(contador1);
    contador1++
    setTimeout(inputH1, speed);
  }
}
inputH1()

function inputH2() {
  if (contador2 < text2.length) {
    document.getElementById('sub-press').innerHTML += text2.charAt(contador2);
    contador2++
    setTimeout(inputH2, speed2);
  }
}
inputH2()

const frases = ['Faça. Ou não faça. Não existe a tentativa. -Yoda, Mestre', 'Transmita o que aprendeu. Força, maestria. Mas fraqueza, insensatez, fracasso também. Sim, fracasso acima de tudo. O maior professor, o fracasso é. Luke, nós somos o que eles crescem além. Esse é o verdadeiro fardo de todos os mestres. -Yoda, Mestre', 'Eu acho a sua falta de fé perturbadora -Darth Vader', 'Eu estava esperando por você, Obi-Wan. Finalmente, nós nos encontramos de novo. O círculo está agora completo. Quando o deixei, eu era só o aprendiz; agora eu sou o mestre. -Darth Vader', 'Então é assim que a liberdade morre… com um estrondoso aplauso. -Padmé Amidala', 'Esteja consciente dos seus pensamentos, Anakin. Eles vão trair você. -Obi-Wan Kenobi', 'Você foi o escolhido! Foi dito que você iria destruir os Sith, não se juntar a eles! Você deveria ter trazido equilíbrio à Força, não deixá-la na escuridão. -Obi-Wan Kenobi', 'Lembre-se: seu foco determina a sua realidade. -Qui-Gon Jinn', 'A Força é forte em minha família. Meu pai a tem, eu a tenho e minha irmã a tem. Sim. É você, Leia. -Luke Skywalker', 'A rebelião renasce hoje. A guerra está apenas começando e eu não serei o último Jedi. -Luke Skywalker', 'O lado negro da Força é o caminho para muitas habilidades que alguns consideram ser... Antinatural. -Senador Palpatine'];


function randomFrase() {
  let frasePos = parseInt(Math.random() * frases.length)
  document.getElementById('citacao').innerText = frases[frasePos]
}
randomFrase()

document.getElementById('forca').addEventListener('click', randomFrase);

const olPai = document.getElementById('eggs');

cheet('s t a r w a r s', function () {
  const elementoLi = document.createElement('li');
  elementoLi.innerText = 'Star Wars';
  olPai.appendChild(elementoLi);
  cheet.disable('s t a r w a r s');
});

cheet('l u c a s e d u a r d o', function () {
  const elementoLi = document.createElement('li');
  elementoLi.innerText = 'Lucas Eduardo :)';
  olPai.appendChild(elementoLi);
  cheet.disable('l u c a s e d u a r d o');
});

cheet('c a f e', function () {
  const elementoLi = document.createElement('li');
  elementoLi.innerText = 'Café (God Mod)';
  olPai.appendChild(elementoLi);
  cheet.disable('c a f e');
});

const eggList = ['starwars', 'lucaseduardo', 'cafe'];
function showEggs() {
  for (let i = 0; i < eggList.length; i += 1) {
    const elementoLi = document.createElement('li');
    elementoLi.innerText = eggList[i];
    olPai.appendChild(elementoLi);
  }
  cheet.disable('s t a r w a r s');
  cheet.disable('l u c a s e d u a r d o');
  cheet.disable('c a f e');

  document.getElementById('inputCode').setAttribute('disabled', '');
}
document.getElementById('show').addEventListener('click', showEggs);


// const contactMe = new Notification('Olá, como vai você?', {
//   body: 'Vamos nos conectar no Linkedin'
// });

// contactMe.onclick = () => {
//   window.open('https://www.linkedin.com/in/lucas-eduardo-m-alves/');
// }
