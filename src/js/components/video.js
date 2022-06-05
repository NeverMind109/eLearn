const videoPlay = document.querySelectorAll(".video-play");

videoPlay.forEach((el) => {
  el.addEventListener("click", (e) => {
    let video = e.currentTarget
      .closest(".our-system__video")
      .querySelector("video");
    video.play();
    e.currentTarget.style.display = "none";
    setTimeout(() => {
      video.volume = 0.5;
    }, 1000);
  });
});
