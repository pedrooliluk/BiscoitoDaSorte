//variaveis da aplicação
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
//eventos
const btnTry  = document.querySelector("#Cookieclosed");
const btnReset= document.querySelector("#btnTry");

let aPhrases = [
    'frase 01',
    'frase 02',
    'frase 03',
    'frase 04',
    'frase 05',
    'frase 06',
    'frase 07',
    'frase 08',
    'frase 09',
    'frase 10',
    'frase 11',
    'frase 12',
    'frase 13',
    'frase 14',
    'frase 15',
    'frase 16',
    'frase 17',
    'frase 18',
    'frase 19',    
]


//adiciona eventos
btnTry.addEventListener('click',ClickButton)
btnReset.addEventListener('click',playAgain)

//document.addEventListener('keypress', PressEnter)

//funcao callback
function ClickButton(event){
    
    const numero = Math.floor(Math.random() * aPhrases.length);

    event.preventDefault()

    toggleScreen();
    document.querySelector('.screen2 h2').innerText = 'Aqui está a sua sorte de hoje:'
    
    document.querySelector('#randomPhrase').innerText = aPhrases[numero]
    
}

function playAgain(event){
    toggleScreen();
}


function toggleScreen(){
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}
