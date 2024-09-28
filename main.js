import './style.css'

const video = document.querySelector(".video");
const btn = document.querySelector(".btn");

btn.addEventListener('click', function(){
  if(video.paused){
    video.play();
    btn.style.backgroundColor = "white"
    btn.innerHTML = "Pause"
  } else{
    video.pause();
    btn.style.backgroundColor = "aqua"
    btn.style.color = "black"
    btn.innerHTML = "Play"
  }
})