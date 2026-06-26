// Splash Screen

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("splash-screen").style.opacity = "0";
        document.getElementById("splash-screen").style.transition = "1s";

        setTimeout(() => {

            document.getElementById("splash-screen").style.display = "none";

            document.getElementById("main-content").style.display = "block";

        }, 1000);

    }, 4300);

});

// Countdown

const eventDate = new Date(
    "September 10, 2026 09:00:00"
).getTime();

const countdown = setInterval(() => {

    const now = new Date().getTime();

    const distance = eventDate - now;

    if (distance < 0) {

        document.getElementById("countdown").innerHTML =
        "● LIVE";

        clearInterval(countdown);

        return;
    }

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("countdown").innerHTML =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;

}, 1000);
// Mobile Navigation

const hamburger =
document.getElementById("hamburger");

const navLinks =
document.querySelector(".nav-links");

if (hamburger && navLinks) {

    hamburger.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}
/* =========================
   OC Flip Cards (Mobile)
========================= */

document.querySelectorAll(".oc-card").forEach(card => {

    card.addEventListener("click", function(){

        if(window.innerWidth <= 1100){

            this.classList.toggle("flipped");

        }

    });

});
