// Navigation Bar Effects On Scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});


// Service Modal
const serviceModals = document.querySelectorAll(".service-modal");
const learnMoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = ((modalClick) => {
    serviceModals[modalClick].classList.add('active');
})

learnMoreBtns.forEach((learnMoreBtn, i) => {
    learnMoreBtn.addEventListener("click", () => {
        modal(i);
    })
})

modalCloseBtns.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove('active')
        })
    })
})


// Portfolio Modals

const portfolioModals = document.querySelectorAll(".portfolio-modal");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = ((modalClick) => {
    portfolioModals[modalClick].classList.add('active');
})

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModal(i);
    })
})

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener('click', () => {
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove('active')
        })
    })
})

// Stop modals from showing on page load


//swiper 
var swiper = new Swiper(".client-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// video url - https://youtu.be/IJzuN5UGqmo?t=3519