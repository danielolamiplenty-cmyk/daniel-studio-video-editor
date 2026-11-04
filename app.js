const video = document.getElementById("video");
const input = document.getElementById("videoInput");

input.addEventListener("change", function() {
  const file = this.files[0];

  if (file) {
    video.src = URL.createObjectURL(file);
    video.style.display = "block";
    video.load();
  }
});

function playVideo() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function addText() {
  const caption = document.getElementById("caption").value;
  document.getElementById("previewText").textContent = caption;
}

const filters = [
  "none",
  "grayscale(1)",
  "sepia(1)",
  "saturate(2)",
  "contrast(1.5)"
];

let filterIndex = 0;

function changeFilter() {
  filterIndex = (filterIndex + 1) % filters.length;
  video.style.filter = filters[filterIndex];
}

function downloadVideo() {
  alert("Advanced video export is coming soon!");
}
