document.addEventListener('DOMContentLoaded', () => {
    const audio1 = new Audio('./Sounds/Zapatos.mp3');
    const audio2 = new Audio('./Sounds/Sonido de calle.mp3');
    const audio3 = new Audio('./Sounds/Sonido de manifestación.mp3');
    const audio4 = new Audio('./Sounds/Tinnitus.mp3');
    const audio5 = new Audio('./Sounds/Reloj.mp3');
    let currentAudio = audio1;

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        const section = document.querySelector('.section').offsetTop;
        const row2 = document.querySelector('.row2').offsetTop;
        const row4 = document.querySelector('.row4').offsetTop;
        const row5 = document.querySelector('.row5').offsetTop;
        const row6 = document.querySelector('.row6').offsetTop;
        const row7 = document.querySelector('.row7').offsetTop;
        const row8 = document.querySelector('.row8').offsetTop;
        const row11 = document.querySelector('.row11').offsetTop;
        const credits = document.querySelector('.créditos').offsetTop;

        if (scrollPosition >= row11) {
            fadeOutAllExcept(audio3);
            audio3.play();
        } else if (scrollPosition >= row8) {
            fadeOutAllExcept(audio4);
            audio4.play();
        } else if (scrollPosition >= row7) {
            fadeOutAllExcept(audio3, audio2);
            audio3.play();
            audio2.play();
        } else if (scrollPosition >= row6) {
            fadeOutAllExcept(audio2, audio5);
            audio2.play();
            audio5.play();
        } else if (scrollPosition >= row5) {
            fadeOutAllExcept(audio3);
            audio3.play();
        } else if (scrollPosition >= row4) {
            fadeOutAllExcept(audio2, audio3);
            audio2.play();
            audio3.play();
        } else if (scrollPosition >= row2) {
            fadeOutAllExcept(audio2, audio1);
            audio1.play(); 
            audio2.play();
        } else if (scrollPosition >= section) {
            fadeOutAllExcept(audio1);
            audio1.play(); 
        } else {
            fadeOutAllExcept(audio1);
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
        const audios = [audio1, audio2, audio3, audio4];
        audios.forEach(audio => {
            if (!exceptions.includes(audio)) {
                fadeOut(audio);
            }
        });
    }

    // Iniciar la reproducción del primer audio
    audio1.play();
});
