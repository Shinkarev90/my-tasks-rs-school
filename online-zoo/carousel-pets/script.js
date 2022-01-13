const gap = 16;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);

  if (carousel.scrollLeft >= 2067) {  
    carousel.scrollLeft = 0;
    console.log("с начала");
  }
});

prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);

  if (carousel.scrollLeft == 0) {  
    carousel.scrollLeft = 2069;
    console.log("с конца");
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));