document.addEventListener("DOMContentLoaded", () => {

  const song = document.getElementById("loveSong");
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const mainScreen = document.getElementById("mainScreen");
  const yesScreen = document.getElementById("yesScreen");
  const loveText = document.querySelector(".loveText");

  let scale = 1;
  let currentIndex = 0;
  let carouselInterval = null;

  // NO button
  noBtn.addEventListener("click", () => {
    scale += 0.2;
    yesBtn.style.transform = `scale(${scale})`;

    if (scale > 3) {
      yesBtn.style.position = "fixed";
      yesBtn.style.top = "0";
      yesBtn.style.left = "0";
      yesBtn.style.width = "100vw";
      yesBtn.style.height = "100vh";
      yesBtn.style.borderRadius = "0";
      yesBtn.style.fontSize = "2rem";
      yesBtn.style.zIndex = "999";
    }
  });

  // YES button
  yesBtn.addEventListener("click", () => {
    mainScreen.classList.add("hidden");
    yesScreen.classList.remove("hidden");

    song.volume = 0.5;
    song.loop = true;
    song.play();

    setTimeout(() => {
      loveText.style.opacity = "1";
    }, 500);

    startCarousel(); // start AFTER screen is visible
  });

  function startCarousel() {
    const track = document.querySelector(".carousel-track");
    const slides = document.querySelectorAll(".slide");

    if (!track || slides.length === 0) {
      console.log("Carousel elements not found.");
      return;
    }

    if (carouselInterval) return; // prevent duplicate intervals

    carouselInterval = setInterval(() => {
      currentIndex++;
      if (currentIndex >= slides.length) {
        currentIndex = 0;
      }
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, 3000);
  }

});
