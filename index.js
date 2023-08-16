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
const ulexpe5 = document.getElementById('ulExpe5');
const ulexpe6 = document.getElementById('ulExpe6');
const ulexpe7 = document.getElementById('ulExpe7');
const ulexpe8 = document.getElementById('ulExpe8');
const ulexpe9 = document.getElementById('ulExpe9');
const ulexpe10 = document.getElementById('ulExpe10');
const backForma = document.getElementById('formacao');
const backProje = document.getElementById('projetos');
const backEmpreBloco = document.getElementById('empresaBloco');
const backEmpreBloco2 = document.getElementById('empresaBloco2');
const backEmpreBloco3 = document.getElementById('empresaBloco3');
const backPorti = document.getElementById('portifolios');
const tituloProje = document.getElementById('tituloProje');
const styleSheet = document.createElement('style');
document.head.appendChild(styleSheet);

const styleSheet2 = document.createElement('style');
document.head.appendChild(styleSheet2);

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
        ulexpe.style.background = '#b6f829';
        ulexpe2.style.background = '#b6f829';
        ulexpe3.style.background = '#b6f829';
        ulexpe4.style.background = '#b6f829';
        ulexpe5.style.background = '#b6f829';
        ulexpe6.style.background = '#b6f829';
        ulexpe7.style.background = '#b6f829';
        ulexpe8.style.background = '#b6f829';
        ulexpe9.style.background = '#b6f829';
        ulexpe10.style.background = '#b6f829';
        backForma.style.background = '#0d1117';
        backEmpreBloco.style.background = '#505050';
        backEmpreBloco2.style.background = '#505050';
        backEmpreBloco3.style.background = '#505050';
        backProje.style.background = "#0d1117";
        tituloProje.style.color = "#b6b5b5";
        backPorti.style.background = "#0d1117";
        styleSheet.sheet.insertRule('#animacaoBack::before { background: #0d1117; }', 0);
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
            ulexpe2.style.background = '#ececec';
            ulexpe3.style.background = '#ececec';
            ulexpe4.style.background = '#ececec';
            ulexpe5.style.background = '#ececec';
            ulexpe6.style.background = '#ececec';
            ulexpe7.style.background = '#ececec';
            ulexpe8.style.background = '#ececec';
            ulexpe9.style.background = '#ececec';
            ulexpe10.style.background = '#ececec';
            backForma.style.background = '#535353';
            backEmpreBloco.style.background = '#c5c3c3';
            backEmpreBloco2.style.background = '#c5c3c3';
            backEmpreBloco3.style.background = '#c5c3c3';
            backProje.style.background = "#424242";
            tituloProje.style.color = "Black";
            backPorti.style.background = "#424242";
            styleSheet.sheet.removeRule(0);
            isDarkTheme = true;
        }
    });




const iconList = document.getElementById('icon-list');
const cloneIconList = iconList.cloneNode(true);

iconList.parentNode.appendChild(cloneIconList);

function removeClone() {
    iconList.parentNode.removeChild(cloneIconList);
}

iconList.addEventListener('transitionend', removeClone);
