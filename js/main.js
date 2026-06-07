// Splash Screen

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("splash-screen").style.opacity = "0";
        document.getElementById("splash-screen").style.transition = "1s";

        setTimeout(() => {

            document.getElementById("splash-screen").style.display = "none";

            document.getElementById("main-content").style.display = "block";

        }, 1000);

    }, 3000);

});

// Countdown

const eventDate = new Date(
    "September 15, 2026 09:00:00"
).getTime();

const countdown = setInterval(() => {

    const now = new Date().getTime();

    const distance = eventDate - now;

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

    const timer =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    const countdownElement =
        document.getElementById("countdown");

    if (distance < 0) {

        document.getElementById("countdown-grid").innerHTML =
            "<h2 style='color:#f4a949'>● LIVE</h2>";

        clearInterval(countdown);

    } else {

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;

    }

}, 1000);
