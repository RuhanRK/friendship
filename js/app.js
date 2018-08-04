// Audio------------
var myAudio = document.getElementById("myAudio");
var myAudioEng = document.getElementById("myAudioEng");
var isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    myAudio.pause()
  } else {
    myAudio.play();
  }
};
myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
};

function togglePlayEng() {
  if (isPlaying) {
    myAudioEng.pause()
  } else {
    myAudioEng.play();
  }
};
myAudioEng.onplaying = function() {
  isPlaying = true;
};
myAudioEng.onpause = function() {
  isPlaying = false;
};


$('.sound p').click(function(){
    $(this).find('i').toggleClass('fa-music fa-pause')
});
