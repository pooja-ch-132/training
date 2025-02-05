// Display a promotional alert when the page loads
window.addEventListener("load", () => {
  alert("Welcome to Burger Week! Enjoy our special $5.49 offer!");
});

// Scroll to specific sections when navigation links are clicked
const navLinks = document.querySelectorAll("footer nav ul li a");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    const targetId = event.target.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Add hover effect to promo price
const promoPrice = document.querySelector(".promo-price");

promoPrice.addEventListener("mouseover", () => {
  promoPrice.style.transform = "scale(1.1)";
  promoPrice.style.transition = "transform 0.3s ease";
});

promoPrice.addEventListener("mouseout", () => {
  promoPrice.style.transform = "scale(1)";
});
