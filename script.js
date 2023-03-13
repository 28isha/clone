  console.log("Welcome to  Rhythm");
//   intialize the variables
  let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));
  let songs=[
    {songName:"Another Love",filepath:"songs/1.mp3",coverPath:"song1.jpeg"},
    {songName:"After Hours ",filepath:"songs/2.mp3",coverPath:"afterhours.jpg"},
  {songName:"Die For You",filepath:"songs/3.mp3",coverPath:"dieforyou.jpg"},
  {songName:"Starboy",filepath:"songs/4.mp3",coverPath:"starboy.jpg"},
  {songName:"If the World was Ending",filepath:"songs/5.mp3",coverPath:"iftheworld.jpg"},
  {songName:"Darkhaast",filepath:"songs/6.mp3",coverPath:"darkhaast.jpg"},
  {songName:"Uska hee banana",filepath:"songs/7.mp3",coverPath:"uskahi.jpg"},
 {songName:"To the Stars",filepath:"songs/8.mp3",coverPath:"tothestars.jpg"},
  {songName:"Waalian",filepath:"songs/9.mp3",coverPath:"waalian.jpg"},
  {songName:"Lemonade",filepath:"songs/10.mp3",coverPath:"lemonade - Copy.jpg"},
  ]
  songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
    element.getElementsByClassName("songItemPlay")[0].id=i.toString();
  })
// // audioElement.play(); 
// Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1; 
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0; 
    }
})

// Listen To Events
audioElement.addEventListener('timeupdate',()=>{
console.log('timeupdate');
//update seekbar
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
console.log(progress);
})  
myProgressBar.addEventListener('change',()=>{
  audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeallPlays=()=>{
 Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
  })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
makeallPlays();
songIndex=parseInt(e.target.id);
e.target.classList.remove('fa-play-circle');
e.target.classList.add('fa-pause-circle');
audioElement.src=`songs/${songIndex+1}.mp3`;
masterSongName.innerText=songs[songIndex].songName;
audioElement.currentTime=0;
audioElement.play();
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
})
})
document.getElementById('next').addEventListener('click',()=>{
  if(songIndex>=9){
    songIndex=0
   }
   else{
    songIndex+=1;
   }
   audioElement.src=`songs/${songIndex+1}.mp3`;
   masterSongName.innerText=songs[songIndex].songName;
   audioElement.currentTime=0;
   audioElement.play();
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
  if(songIndex<=0){
    songIndex=0 
   }
   else{
    songIndex -=1;
   }
   audioElement.src=`songs/${songIndex+1}.mp3`;
   masterSongName.innerText=songs[songIndex].songName;
   audioElement.currentTime=0;
   audioElement.play();
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
})
