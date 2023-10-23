
const musicContainer = document.querySelector('.music-container')
const progress = document.querySelector('.progress-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
var ul = document.querySelector('.playlist')
var li = document.createElement("li");
var ol = document.getElementById("recommends")
var lili = document.createElement("li");

const audio = document.querySelector('#audio')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

const chatContainer = document.getElementById("chat-container");
const chatForm = document.getElementById("chat-form");
const messageInput = document.getElementById("message-input");





const inputGenre = document.getElementById('genre')
const buttonInputGenre = document.getElementById('buttonGenre')
const outputGenre = document.getElementById('output1')

const body = document.querySelector("body");

//SONG TITLES
const songs = ['CastleOfGlass','GlimpseOfUs','WeAreYoung']

const pop = ['Watermelon Sugar', 'Midsummer Madness', 'Uptown Funk']

const rap = ['99 Problems', 'Rap God', 'Donda']

const rock = ['Scar Tissues', 'Dumb', 'In The End']

const edm = ['All i need', 'Bangarang', 'Lean On']

const indie = ['Reptilia', 'Electric Love', 'The Less I Know The Better']

const kpop = ['Butter','Likey','Cupid']

//keep track of songs
let songIndex = 0;

//initially load song info DOM
loadsong(songs[songIndex])

body.onload = function loadPlaylist(){
    for(i=0;i<songs.length;i++){
        ul.innerHTML += '<li>'+songs[i]+'</li>';
    }
}



//update song details
function loadsong(song){
    title.innerText = song;
    audio.src = 'songs/'+song+'.mp3'
    cover.src = 'images/'+song+'.jpg'
}

function playSong(){
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    console.log("Play song")

    audio.play()

    // PLAY THE AUDIO
}

function pauseSong(){
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')

    console.log("pause song")
    console.log(audio)

    audio.pause()
    //PAUSE THE AUDIO
}

function prevSong(){
    songIndex--;

    if(songIndex<0)
    songIndex = songs.length-1;

    loadsong(songs[songIndex])
    console.log("next song")

    playSong();

}

function nextSong(){
    songIndex++;

    if(songIndex>songs.length-1)
    songIndex = 0;

    loadsong(songs[songIndex])

    playSong();
}

function getGenre(){
   if(inputGenre.value === 'pop'){
   for(i=0;i<pop.length;i++){
    ol.innerHTML += '<li>'+pop[i]+'</li>';
    }
}
if(inputGenre.value === 'rock'){
    for(i=0;i<pop.length;i++){
     ol.innerHTML += '<li>'+rock[i]+'</li>';
     }
 }
 if(inputGenre.value === 'indie'){
    for(i=0;i<pop.length;i++){
     ol.innerHTML += '<li>'+indie[i]+'</li>';
     }
 }
 if(inputGenre.value === 'edm'){
    for(i=0;i<pop.length;i++){
     ol.innerHTML += '<li>'+edm[i]+'</li>';
     }
 }  
 if(inputGenre.value === 'rap'){
    for(i=0;i<pop.length;i++){
     ol.innerHTML += '<li>'+rap[i]+'</li>';
     }
 }  
 if(inputGenre.value === 'kpop'){
    for(i=0;i<pop.length;i++){
     ol.innerHTML += '<li>'+kpop[i]+'</li>';
     }
 }  
}

buttonInputGenre.addEventListener('click',getGenre);

// function updateProgress(e){
//         const Duration = e.srcElement.duration;
//         console.log(Duration)
//         const totalTime = e.srcElement.currentTime;
//         console.log(totalTime)

//         const progressPercent = (totalTime/Duration)*100;
//         console.log(progressPercent)

//         progress.style.width = '${progressPercent}%'
// }

playBtn.addEventListener('click', function(){
    const isPlaying = musicContainer.classList.contains('play')

    if(isPlaying){
        pauseSong();
    }
    else{
        playSong();
    }
})

// chatForm.addEventListener('submit', event => {
//     event.preventDefault();
//     const message = messageInput.value;
//     const messageElement = document.createElement('div');
//     messageElement.textContent = message;
//     chatContainer.appendChild(messageElement);
//     messageInput.value = '';
//   });

// CHANGE SONG

prevBtn.addEventListener('click',prevSong)
nextBtn.addEventListener('click',nextSong)

// audio.addEventListener('timeupdate', updateProgress)