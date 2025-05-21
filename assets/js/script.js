// Intersection Observer animation
const sections = document.querySelectorAll("section");
const io = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                io.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.2 }
);
sections.forEach((sec) => io.observe(sec));

// Slider
const slides = document.querySelector(".slides");
const total = document.querySelectorAll(".slide").length;
let idx = 0;
document.getElementById("next").addEventListener("click", () => {
    idx = (idx + 1) % total;
    slides.style.transform = `translateX(-${idx * 100}%)`;
});
document.getElementById("prev").addEventListener("click", () => {
    idx = (idx - 1 + total) % total;
    slides.style.transform = `translateX(-${idx * 100}%)`;
});

// FAQ Accordion
document.querySelectorAll(".faq-question").forEach((q) => {
    q.addEventListener("click", () => {
        const a = q.nextElementSibling;
        a.style.maxHeight = a.scrollHeight + "px";
    });
});
