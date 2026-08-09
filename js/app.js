window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

const weddingDate = new Date("2026-09-05T18:00:00-06:00");

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

function updateCountdown() {
  const now = new Date();

  const difference = weddingDate - now;

  if (difference <= 0) {
    daysElement.textContent = "00";
    hoursElement.textContent = "00";
    minutesElement.textContent = "00";
    secondsElement.textContent = "00";

    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (difference / (1000 * 60 * 60)) % 24
  );

  const minutes = Math.floor(
    (difference / (1000 * 60)) % 60
  );

  const seconds = Math.floor(
    (difference / 1000) % 60
  );

  daysElement.textContent = String(days).padStart(2, "0");
  hoursElement.textContent = String(hours).padStart(2, "0");
  minutesElement.textContent = String(minutes).padStart(2, "0");
  secondsElement.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);

const revealElements = document.querySelectorAll(
  ".reveal, .reveal--left, .reveal--right"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");

        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

const music = document.getElementById("backgroundMusic");
const musicControl = document.getElementById("musicControl");
const musicText = musicControl.querySelector(".music-control__text");

musicControl.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();

      musicControl.classList.add("is-playing");
      musicControl.setAttribute("aria-pressed", "true");
      musicControl.setAttribute("aria-label", "Pausar música");

      musicText.textContent = "Pausar";
    } catch (error) {
      console.error("No fue posible reproducir la música:", error);
    }
  } else {
    music.pause();

    musicControl.classList.remove("is-playing");
    musicControl.setAttribute("aria-pressed", "false");
    musicControl.setAttribute("aria-label", "Reproducir música");

    musicText.textContent = "Música";
  }
});