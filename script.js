

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

    // Wedding website welcome message
    console.log("Welcome to our wedding website! ❤️");
    console.log("Wedding dates will be announced soon.");

});
