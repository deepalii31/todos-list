console.log("welcome to spotify");

let songIndex = 0;
let audioElement = new Audio('song.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressBar = document.getElementById('myprogressBar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songitem = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    {songName: "soni soni", filePath:"song.mp3", coverPath:"cover.jpg"},
    {songName: "Gurjari", filePath: "Gurjari.mp3", coverPath:"cover2.jpg"},
    {songName: "Admirin", filePath: "Admirin.mp3", coverPath:"cover3.jpg"},
    {songName: "One Love", filePath: "One Love.mp3", coverPath:"cover4.jpg"},
   
]

songitem.forEach((element, i) =>{
    console.log(element, i);
    
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;

})

masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressBar.value = progress;
})

myprogressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressBar.value * audioElement.duration/100;
}) 


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) =>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element) =>{
    element.addEventListener('click', (e)=>{
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove('fa-circle-play');
      e.target.classList.add('fa-circle-pause');
      audioElement.src = `${songs[songIndex].filePath}`;
      mastersongname.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      masterplay.classList.remove('fa-circle-play');
      masterplay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=3){
        songIndex = 0
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `${songs[songIndex].filePath}`;
    mastersongname.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `${songs[songIndex].filePath}`;
    mastersongname.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})

