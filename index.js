const botaoLua = document.querySelector('#botao-lua');
const moonIcon = document.querySelector('.fa-moon');
const sunIcon = document.createElement('i');
const introducao = document.querySelector('.introducao');
sunIcon.classList.add('fa-solid', 'fa-sun', 'fa-2x');
const backHeader = document.getElementById('headerS');
const palavraHeader = document.getElementById('ulHeader');
const palavraHeader2 = document.getElementById('ulHeader2');
const palavraHeader3 = document.getElementById('ulHeader3');
const palavraHeader4 = document.getElementById('ulHeader4');
const gGrande = document.getElementById('gh1');
const backIntro = document.getElementById('backIntroducao');
const animaBack = document.getElementById('animacaoBack');
const estiloBack = window.getComputedStyle(animaBack, ':before');
const corBefore = estiloBack.getPropertyValue('background');
const backExpe = document.getElementById('experiencia');
const ulexpe = document.getElementById('ulExpe');
const ulexpe2 = document.getElementById('ulExpe2');
const ulexpe3 = document.getElementById('ulExpe3');
const ulexpe4 = document.getElementById('ulExpe4');
let isDarkTheme = true;

botaoLua.addEventListener('click', () => {
    if (isDarkTheme) {
            moonIcon.remove();
            botaoLua.appendChild(sunIcon);
            backHeader.style.background = '#0a0b0a';
            palavraHeader.style.color = '#e4e7e5';
            palavraHeader2.style.color = '#e4e7e5';
            palavraHeader3.style.color = '#e4e7e5';
            palavraHeader4.style.color = '#e4e7e5';
            backIntro.style.background = '#0d1117'
            gGrande.style.color = '#e4e7e5';
            backIntro.style.color = '#e4e7e5';
            backExpe.style.background = '#0d1117';
            ulexpe.style.color = 'black';
            ulexpe.style.background = '#b6f829';
            ulexpe2.style.color = 'black';
            ulexpe2.style.background = '#b6f829';
            ulexpe3.style.color = 'black';
            ulexpe3.style.background = '#b6f829';
            ulexpe4.style.color = 'black';
            ulexpe4.style.background = '#b6f829';
            isDarkTheme = false;
          } else {
            sunIcon.remove();
            botaoLua.appendChild(moonIcon);
            backHeader.style.background = 'white';
            palavraHeader.style.color = 'black';
            palavraHeader2.style.color = 'black';
            palavraHeader3.style.color = 'black';
            palavraHeader4.style.color = 'black';
            backIntro.style.background = '#ffffff';
            backIntro.style.color = 'black';
            backExpe.style.background = '#dadada';
            gGrande.style.color = 'black';
            ulexpe.style.color = 'black';
            ulexpe.style.background = '#ececec';
            ulexpe2.style.color = 'black';
            ulexpe2.style.background = '#ececec';
            ulexpe3.style.color = 'black';
            ulexpe3.style.background = '#ececec';
            ulexpe4.style.color = 'black';
            ulexpe4.style.background = '#ececec';
            isDarkTheme = true;
          }
        });


