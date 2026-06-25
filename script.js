const root = document.documentElement;
const cards = document.querySelectorAll(".glass-card, .liquid-frame");

window.addEventListener("pointermove", (event) => {
  const x = event.clientX / window.innerWidth;
  const y = event.clientY / window.innerHeight;
  root.style.setProperty("--mouse-x", x.toFixed(3));
  root.style.setProperty("--mouse-y", y.toFixed(3));
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll("section, .glass-card, .liquid-frame").forEach((node) => {
  node.classList.add("reveal");
  observer.observe(node);
});

cards.forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--shine-x", `${x}%`);
    card.style.setProperty("--shine-y", `${y}%`);
  });
});
