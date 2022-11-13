const videoPlayBtn = document.querySelector(".video-play");
const videoEl = document.querySelector(".our-system video");

videoPlayBtn.addEventListener("click", videoFunction);
videoEl.addEventListener("click", videoFunction);

function videoFunction() {
  if (videoEl.paused) {
    videoEl.play();
    videoPlayBtn.style.display = "none";
    videoEl.volume = 0.5;
  } else {
    videoEl.pause();
    videoPlayBtn.style.display = "flex";
  }
}
