// ================== Navigation Bar Effects On Scroll ======================== //

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// ============================= Service Modal ======================= //

const serviceModals = document.querySelectorAll(".service-modal");
const learnMoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = (modalClick) => {
  serviceModals[modalClick].classList.add("active");
};

learnMoreBtns.forEach((learnMoreBtn, i) => {
  learnMoreBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloseBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    serviceModals.forEach((modalView) => {
      modalView.classList.remove("active");
    });
  });
});

// ======================= Portfolio Modals ====================== //

const portfolioModals = document.querySelectorAll(".portfolio-modal");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");
const projectLinks = document.querySelectorAll(".project-link");

var portfolioModal = (modalClick) => {
  portfolioModals[modalClick].classList.add("active");
};

imgCards.forEach((imgCard, i) => {
  imgCard.addEventListener("click", () => {
    portfolioModal(i);
  });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
  portfolioCloseBtn.addEventListener("click", () => {
    portfolioModals.forEach((portfolioModalView) => {
      portfolioModalView.classList.remove("active");
    });
  });
});

// Close modal when clicking on project link

projectLinks.forEach((link) => {
  link.addEventListener('click', () => {
    portfolioModals.forEach((portfolioModalView) => {
      portfolioModalView.classList.remove("active");
    });
  })
})

// Stop modals from showing on page load

// ============= swiper - Waiting to add clients to client list ============= //

// var swiper = new Swiper(".client-swiper", {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// Scroll To Top Button

const scrollToTopBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  scrollToTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollToTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// Dark/Light theme

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeBtn.classList.toggle("sun");

  localStorage.setItem("saved-theme", getCurrentTheme());
  localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () =>
  document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () =>
  themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if (savedTheme) {
  document.body.classList[savedTheme === "dark" ? "add" : "remove"](
    "dark-theme"
  );
  themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

// Nav menu items active on page scroll

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    let sectionHeight = section.offsetHeight;
    let sectionTop = section.offsetTop - 60;
    let id = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-items a[href*=" + id + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav-items a[href*=" + id + "]")
        .classList.remove("active");
    }
  });
});

// Nav Menu Toggle

const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");


menuBtn.addEventListener('click', () => {
  navigation.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  navigation.classList.remove('active');
});

navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    navigation.classList.remove('active');
  })
})

// Scroll Reveal Animations

ScrollReveal({ 
  reset: false,
  distance: '60px',
  duration: 2500,
  delay: 400
});

// Target Elements, and specify options

ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02, footer .about', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', { delay: 500, origin: 'right' });
ScrollReveal().reveal('.home .info .btn', { delay: 600, origin: 'bottom' });
ScrollReveal().reveal('.media-icons i, .contact-left li', { delay: 400, origin: 'left', interval: 200 });
ScrollReveal().reveal('.home-img, .about-img', { delay: 400, origin: 'bottom' });
ScrollReveal().reveal('.about .description, .copy-right', { delay: 500, origin: 'right' });
ScrollReveal().reveal('.about .professional-list li, .contact-right div', { delay: 500, origin: 'right', interval: 200 });
ScrollReveal().reveal('.skills-description, .service-description, .contact-card, .client-swiper, .contact-left h2', { delay: 600, origin: 'left' });
ScrollReveal().reveal('.experience-card, .service-card, .education, .portfolio .img-card, .info', { delay: 600, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('footer .group', { delay: 400, origin: 'top', interval: 200 });
