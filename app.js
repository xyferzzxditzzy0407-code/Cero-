/* =========================================
   CERO.MY.ID
   Main UI JavaScript
   ========================================= */


/* -----------------------------------------
   MOBILE MENU
----------------------------------------- */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

  menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    menuBtn.textContent =
      navLinks.classList.contains("open")
        ? "×"
        : "☰";

  });


  document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("open");

      menuBtn.textContent = "☰";

    });

  });

}


/* -----------------------------------------
   ACTIVE NAVIGATION
----------------------------------------- */

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

  let currentSection = "";

  sections.forEach(section => {

    const sectionTop =
      section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }

  });


  navItems.forEach(item => {

    item.classList.remove("active");

    const href = item.getAttribute("href");

    if (href === `#${currentSection}`) {
      item.classList.add("active");
    }

  });

});


/* -----------------------------------------
   PRODUCT MODAL
----------------------------------------- */

const productModal =
  document.getElementById("productModal");

const modalProductName =
  document.getElementById("modalProductName");


function showProduct(productName) {

  if (!productModal) return;

  if (modalProductName) {
    modalProductName.textContent =
      productName;
  }

  productModal.classList.add("active");

  document.body.style.overflow = "hidden";
}


function closeProduct() {

  if (!productModal) return;

  productModal.classList.remove("active");

  document.body.style.overflow = "";
}


/* Close modal with ESC */

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {
    closeProduct();
  }

});


/* -----------------------------------------
   SCROLL REVEAL
----------------------------------------- */

const revealElements = document.querySelectorAll(
  ".product-card, .service-card, .about-box, .contact-box"
);


const revealObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.style.opacity = "1";

          entry.target.style.transform =
            "translateY(0)";

          revealObserver.unobserve(
            entry.target
          );

        }

      });

    },
    {
      threshold: 0.1
    }
  );


revealElements.forEach(element => {

  element.style.opacity = "0";

  element.style.transform =
    "translateY(20px)";

  element.style.transition =
    "opacity .6s ease, transform .6s ease";

  revealObserver.observe(element);

});


/* -----------------------------------------
   BUTTON RIPPLE
----------------------------------------- */

document
  .querySelectorAll(".primary-btn, .secondary-btn")
  .forEach(button => {

    button.addEventListener("click", function () {

      this.style.transform = "scale(.98)";

      setTimeout(() => {

        this.style.transform = "";

      }, 120);

    });

  });


/* -----------------------------------------
   CONSOLE BRANDING
----------------------------------------- */

console.log(`
╔══════════════════════════════╗
║          C E R O             ║
║     Digital made simple.     ║
╚══════════════════════════════╝
`);

console.log(
  "Cero.my.id — UI loaded successfully."
);
