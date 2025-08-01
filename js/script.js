// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  // Contact form validation
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function (e) {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields before submitting.");
      e.preventDefault();
    }
  });
});
