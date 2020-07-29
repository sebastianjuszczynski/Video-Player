const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelector("[data-skip");
const ranges = player.querySelector(".player__slider");

function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
};
function updateButtonIcon() {
    const icon = this.paused ? "►" : "❚ ❚";
    toggle.textContent = icon;
}

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButtonIcon);
video.addEventListener("pause", updateButtonIcon);
toggle.addEventListener("click", togglePlay);
