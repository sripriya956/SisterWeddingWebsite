
document.addEventListener("DOMContentLoaded", function () {

    // ==============================
    // WEDDING COUNTDOWN MESSAGE
    // ==============================
    const countdown = document.getElementById("countdown");

    if (countdown) {
        countdown.textContent =
            "Wedding date and event details coming soon! ❤️";
    }

    // ==============================
    // SMOOTH SCROLLING
    // ==============================
    document.querySelectorAll("nav a, .btn, .logo").forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href");

            if (targetId && targetId.startsWith("#")) {
                const target = document.querySelector(targetId);

                if (target) {
                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });

    // ==============================
    // WEDDING GALLERY SLIDESHOW
    // ==============================
    
const gallerySlides = document.querySelectorAll(".gallery-slide");
const galleryCounter = document.getElementById("galleryCounter");
const prevButton = document.getElementById("prevSlide");
const nextButton = document.getElementById("nextSlide");

let currentIndex = 0;
let galleryTimer = null;

function showPhoto(index) {
    if (gallerySlides.length === 0) return;

    currentIndex =
        (index + gallerySlides.length) % gallerySlides.length;

    gallerySlides.forEach(function (slide, i) {
        slide.classList.toggle("active", i === currentIndex);
    });

    if (galleryCounter) {
        galleryCounter.textContent =
            `${currentIndex + 1} / ${gallerySlides.length}`;
    }
}

function startGallery() {
    clearInterval(galleryTimer);

    if (gallerySlides.length > 1) {
        galleryTimer = setInterval(function () {
            showPhoto(currentIndex + 1);
        }, 4000);
    }
}

if (gallerySlides.length > 0) {
    showPhoto(0);
    startGallery();

    if (nextButton) {
        nextButton.addEventListener("click", function () {
            showPhoto(currentIndex + 1);
            startGallery();
        });
    }

    if (prevButton) {
        prevButton.addEventListener("click", function () {
            showPhoto(currentIndex - 1);
            startGallery();
        });
    }
}

    // ==============================
    // WEDDING BACKGROUND MUSIC
    // ==============================
    const song = document.getElementById("weddingSong");

    if (song) {
        song.volume = 0.5;

        function playWeddingSong() {
            if (song.paused) {
                song.play().catch(function (error) {
                    console.log(
                        "Wedding music could not start:",
                        error
                    );
                });
            }
        }

        // Attempt automatic playback
        playWeddingSong();

        // Retry when the visitor interacts with the website
        document.addEventListener("click", playWeddingSong, {
            once: true
        });

        document.addEventListener("touchstart", playWeddingSong, {
            once: true
        });

        document.addEventListener("keydown", playWeddingSong, {
            once: true
        });
    }

    // ==============================
    // WEBSITE READY
    // ==============================
    console.log("Wedding website loaded successfully! ❤️");

});
