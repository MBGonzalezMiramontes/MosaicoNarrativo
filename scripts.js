document.addEventListener("DOMContentLoaded", (event) => {
  const infoButton = document.getElementById("infoButton");
  const infoModal = document.getElementById("infoModal");
  const closeModal = document.getElementById("closeModal");

  infoButton.onclick = function () {
    infoModal.style.display = "block";
  };

  closeModal.onclick = function () {
    infoModal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == infoModal) {
      infoModal.style.display = "none";
    }
  };

  const audio1 = new Audio("./Sounds/Zapatos.mp3");
  const audio2 = new Audio("./Sounds/Sonido de calle.mp3");
  const audio3 = new Audio("./Sounds/Sonido de manifestación.mp3");
  const audio4 = new Audio("./Sounds/Tinnitus.mp3");
  const audio5 = new Audio("./Sounds/Oficina.mp3");
  let currentAudio = audio1;

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    const section = document.querySelector(".section").offsetTop;
    const row2 = document.querySelector(".row2").offsetTop;
    const row3 = document.querySelector(".row3").offsetTop;
    const row5 = document.querySelector(".row5").offsetTop;
    const row6 = document.querySelector(".row6").offsetTop;
    const row7 = document.querySelector(".row7").offsetTop;
    const row = document.querySelector(".row").offsetTop;
    const row11 = document.querySelector(".row11").offsetTop;

    if (scrollPosition >= row11) {
      fadeOutAllExcept(audio3);
      audio3.play();
    } else if (scrollPosition >= row) {
      fadeOutAllExcept(audio4);
      audio4.play();
    } else if (scrollPosition >= row7) {
      fadeOutAllExcept(audio3, audio2);
      audio3.play();
      audio2.play();
    } else if (scrollPosition >= row6) {
      fadeOutAllExcept(audio5, audio2);
      audio5.volume = 1.0; // Full volume for audio5
      audio5.play();
      audio2.volume = 0.2; // Lower volume for audio2
      audio2.play();
    } else if (scrollPosition >= row5) {
      fadeOutAllExcept(audio3);
      audio3.play();
    } else if (scrollPosition >= row3) {
      fadeOutAllExcept(audio2, audio3);
      audio3.play();
      audio2.play();
    } else if (scrollPosition >= row2) {
      fadeOutAllExcept(audio2, audio1);
      audio1.play();
      audio2.play();
    } else if (scrollPosition >= section) {
      fadeOutAllExcept(audio1);
      audio1.play();
    } else {
      fadeOutAllExcept(audio2);
      audio1.play();
    }
  });

  function fadeOut(audio) {
    let volume = audio.volume;
    const fadeAudio = setInterval(() => {
      if (volume > 0.1) {
        volume -= 0.1;
        audio.volume = volume;
      } else {
        clearInterval(fadeAudio);
        audio.pause();
        audio.volume = 1; // Reset volume for next use
      }
    }, 100);
  }

  function fadeIn(audio) {
    audio.volume = 0;
    audio.play();
    let volume = 0;
    const fadeAudio = setInterval(() => {
      if (volume < 1) {
        volume += 0.1;
        audio.volume = volume;
      } else {
        clearInterval(fadeAudio);
      }
    }, 200);
  }

  function fadeOutAllExcept(...exceptions) {
    const audios = [audio1, audio2, audio3, audio4, audio5];
    audios.forEach((audio) => {
      if (!exceptions.includes(audio)) {
        fadeOut(audio);
      }
    });
  }

  // Iniciar la reproducción del primer audio al hacer click en cualquier parte de la página
  document.body.onclick = () => {
    if (currentAudio.paused) {
      currentAudio.play();
    }
  };
});
