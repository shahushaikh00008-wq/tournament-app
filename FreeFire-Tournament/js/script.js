const navbar = document.querySelector("nav");
const cards = document.querySelectorAll(".card");

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.style.display = "none";
    }, 2500);
});

window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
    toggleTopButton();
    revealCards();
});

const targetDate = new Date("July 15, 2026 19:00:00").getTime();

function countdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
        ["days", "hours", "minutes", "seconds"].forEach(id => {
            document.getElementById(id).innerHTML = "00";
        });
        return;
    }

    document.getElementById("days").innerHTML = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0");
    document.getElementById("hours").innerHTML = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
    document.getElementById("minutes").innerHTML = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
    document.getElementById("seconds").innerHTML = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, "0");
}

setInterval(countdown, 1000);
countdown();

function revealCards() {
    const trigger = window.innerHeight - 100;
    cards.forEach(card => {
        if (card.getBoundingClientRect().top < trigger) {
            card.classList.add("revealed");
        }
    });
}
revealCards();

const topButton = document.createElement("button");
topButton.id = "topButton";
topButton.innerHTML = "\u2B06";
document.body.appendChild(topButton);

function toggleTopButton() {
    topButton.classList.toggle("visible", window.scrollY > 300);
}

topButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

const regForm = document.getElementById("registrationForm");
if (regForm) {
    regForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Team Registered Successfully!");
        this.reset();
    });
}

const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you! Your message has been sent successfully.");
        this.reset();
    });
}