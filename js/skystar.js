// poem
var words=[
    'ilovyou',
    'The forth monthsarry',
    'Mahal kita',
    'Let us happy each other forever',
    'in ur gaze, i see my forever',
    'ur laughter is the music of my heart',
    'loving u is my greatest adventure',
    'ur embrace is my safe haven',
    'every moment with u is a treasure',
    'u complete me in ways i never knew',
    'ur touch ignites a fire in my soul',
    'our love is both fierce and tender',
    'u turn the ordinary into magic',
    'each kiss is a promise of forever',
    'u inspire me to love deeper',
    'in ur arms, i find my home',
    'i want to journey thru life with u',
    'ur smile brightens my darkest days',
    'our bond transcends words and time',
    'with u, every moment is bliss',
    'ur my sweetest dream come true',
    'together, we create our own paradise',
    'ur love is the light that guides me',
    'with u, my heart feels at peace',
    'ur the reason for my happiness',
    'in ur eyes, i find my dreams',
    'u make my soul dance with joy',
    'ur whispers are my favorite melody',
    'with every heartbeat, iloveumore',
    'ur my forever and always',
    'each day with u is a gift to cherish',
    'ur love is my greatest treasure'
];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = 'Courgette';
        word.style.fontSize = '20px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load',init);
let textone = document.querySelector('.textone').querySelector('h1');
      let texttwo = document.querySelector('.texttwo').querySelector('h1');
      let textthree = document.querySelector('.textthree').querySelector('h1');

      setTimeout(function(){
        textone.innerHTML = 'Tonight,all the stars of the sky only shine for you';
          textone.style.color = '#E8F9FD';
          textone.style.fontFamily = 'Courgette'
          texttwo.style.color = '#E8F9FD';
          texttwo.style.fontFamily = 'Courgette'
          textthree.style.color = '#E8F9FD';
          textthree.style.fontFamily = 'Courgette'
          texttwo.innerHTML = '';
      },28000)
      setTimeout(function(){
        textone.innerHTML = 'iloveyou forever';
        texttwo.innerHTML = 'Mwapssssss';
        textthree.innerHTML = 'stay loyal until we die';
      },112500)


/*const audio = document.getElementById('hidden-audio');
window.onload = function() {
    audio.play().then(
        () => {
            console.log('playing');
        }
    ).catch(error => {
        console.error(
            'auto-play rejected: ', error
        );
        setTimeout(
            () => {
                audio.muted = false;
                audio.play().catch(err => {
                    console.error('failed: ', err);
                });
            }, 200
        );
    });
}; */

let audioContext;
let audioBuffer;
const audioFilePath = 'video/ApocalypseCigarettesAfterSex.mp3'; 


async function loadAudio() {
    const response = await fetch(audioFilePath);
    const arrayBuffer = await response.arrayBuffer();
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
}


function playAudio() {
    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContext.destination);
    source.loop = true; 
    source.start(0);
}


window.onload = async function() {
    await loadAudio();

    document.addEventListener('click', function() {
        playAudio();
        console.log("plying");
    }, { once: true });
};
