const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

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
};
function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
};
function handleRangeUpdate() {
    video[this.name] = this.value;
};

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButtonIcon);
video.addEventListener("pause", updateButtonIcon);
toggle.addEventListener("click", togglePlay);
skipButtons.forEach(button => button.addEventListener("click" , skip));
ranges.forEach(range => range.addEventListener("change", handleRangeUpdate));
ranges.forEach(range => range.addEventListener("mousemove", handleRangeUpdate));