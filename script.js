

document.addEventListener("DOMContentLoaded", function () {

    // Wedding countdown is disabled until the date is announced
    const countdown = document.getElementById("countdown");

    if (countdown) {
        countdown.textContent =
            "Wedding date and event details coming soon! ❤️";
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a, .btn, .logo').forEach(function (link) {
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

	const gallerySlides = document.querySelectorAll(".gallery-slide");
	const galleryCounter = document.getElementById("galleryCounter");
	const prevButton = document.getElementById("prevSlide");
	const nextButton = document.getElementById("nextSlide");

	let currentIndex = 0;
	let galleryTimer;

	function showPhoto(index) {
	    gallerySlides[currentIndex].classList.remove("active");

	    currentIndex =
	        (index + gallerySlides.length) % gallerySlides.length;

	    const currentPhoto = gallerySlides[currentIndex];
	    const img = currentPhoto.querySelector("img");

	    // Restart the zoom animation for each new photo
	    img.style.animation = "none";
	    void img.offsetWidth;
	    img.style.animation = "";

	    currentPhoto.classList.add("active");

	    galleryCounter.textContent =
	        `${currentIndex + 1} / ${gallerySlides.length}`;
	}

	function nextPhoto() {
	    showPhoto(currentIndex + 1);
	}

	function startGallery() {
	    clearInterval(galleryTimer);
	    galleryTimer = setInterval(nextPhoto, 4000);
	}

	nextButton.addEventListener("click", () => {
	    nextPhoto();
	    startGallery();
	});

	prevButton.addEventListener("click", () => {
	    showPhoto(currentIndex - 1);
	    startGallery();
	});

	startGallery();

	

	document.addEventListener("DOMContentLoaded", () => {
	    const song = document.getElementById("weddingSong");

	    if (!song) {
	        console.error("Wedding song element not found");
	        return;
	    }

	    song.volume = 0.5;

	    // Try autoplay when the website loads.
	    song.play().catch(() => {
	        console.log("Autoplay blocked; waiting for interaction.");
	    });

	    // Start music after the visitor's first interaction if needed.
	    const startMusic = () => {
	        if (song.paused) {
	            song.play().catch(error => {
	                console.error("Unable to play wedding song:", error);
	            });
	        }
	    };

	    document.addEventListener("click", startMusic);
	    document.addEventListener("keydown", startMusic);
	    document.addEventListener("touchstart", startMusic);
	});


    // Wedding website welcome message
    console.log("Welcome to our wedding website! ❤️");
    console.log("Wedding dates will be announced soon.");

});
