

document.addEventListener("DOMContentLoaded", function () {

    // Wedding countdown message
    const countdown = document.getElementById("countdown");

    if (countdown) {
        countdown.textContent =
            "Wedding date and event details coming soon! ❤️";
    }

    // Smooth scrolling for navigation links
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

        gallerySlides[currentIndex].classList.remove("active");

        currentIndex =
            (index + gallerySlides.length) % gallerySlides.length;

        const currentPhoto = gallerySlides[currentIndex];
        const img = currentPhoto.querySelector("img");

        if (img) {
            img.style.animation = "none";
            void img.offsetWidth;
            img.style.animation = "";
        }

        currentPhoto.classList.add("active");

        if (galleryCounter) {
            galleryCounter.textContent =
                `${currentIndex + 1} / ${gallerySlides.length}`;
        }
    }

    function nextPhoto() {
        showPhoto(currentIndex + 1);
    }

    function startGallery() {
        clearInterval(galleryTimer);

        if (gallerySlides.length > 1) {
            galleryTimer = setInterval(nextPhoto, 4000);
        }
    }

    if (gallerySlides.length > 0) {
        // Ensure the first photo is visible
        gallerySlides.forEach(function (slide, index) {
            slide.classList.toggle("active", index === 0);
        });

        if (galleryCounter) {
            galleryCounter.textContent =
                `1 / ${gallerySlides.length}`;
        }

        if (nextButton) {
            nextButton.addEventListener("click", function () {
                nextPhoto();
                startGallery();
            });
        }

        if (prevButton) {
            prevButton.addEventListener("click", function () {
                showPhoto(currentIndex - 1);
                startGallery();
            });
        }

        startGallery();
    } else {
        console.warn("No gallery slides found. Check .gallery-slide in index.html");
    }

    // ==============================

const song = document.getElementById("weddingSong");

if (song) {
    song.volume = 0.5;

    function playWeddingSong() {
        song.play().catch(error => {
            console.log("Music playback blocked or file unavailable:", error);
        });
    }

    // Try to play automatically
    playWeddingSong();

    // Retry after the visitor interacts with the page
    document.addEventListener("click", playWeddingSong, { once: true });
    document.addEventListener("touchstart", playWeddingSong, { once: true });
    document.addEventListener("keydown", playWeddingSong, { once: true });
}

